import { TilesRenderer } from '3d-tiles-renderer';
import { useFrame, useThree } from '@react-three/fiber';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Box3, Matrix4, Mesh, MeshStandardMaterial, Vector3 } from 'three';
import { GLTFLoader } from 'three-stdlib';
import { CesiumRTCPlugin } from '../plugins/CesiumRTCPlugin';
import { PlateauTilesetTransformContext } from './PlateauTilesetTransform';

const gltfLoader = new GLTFLoader();
gltfLoader.register((parser) => new CesiumRTCPlugin(parser));

const material = new MeshStandardMaterial({ metalness: 0.5 });

type PlateauTilesetProps = {
  path: string;
  center?: boolean;
};

export const PlateauTileset = ({ path, center = false }: PlateauTilesetProps) => {
  const { setCenter } = useContext(PlateauTilesetTransformContext);
  const centerRef = useRef(center);
  centerRef.current = center;

  const createTiles = useCallback(
    // pathは以下のjsonを参考にする
    // https://api.plateauview.mlit.go.jp/datacatalog/plateau-datasets/
    (path: string) => {
      const tiles = new TilesRenderer(
        `https://assets.cms.plateau.reearth.io/assets/${path}/tileset.json`,
      );
      tiles.manager.addHandler(/\.gltf$/, gltfLoader);

      // `center` が指定されているとき、タイルの境界ボックスの底面の中央を
      // PlateauTilesetTransform の位置として指定する。
      tiles.forEachLoadedModel = () => {
        if (centerRef.current) {
          const box = new Box3();
          const matrix = new Matrix4();
          tiles.getOrientedBoundingBox(box, matrix);
          box.min.z = box.max.z = Math.min(box.min.z, box.max.z);
          box.applyMatrix4(matrix);
          const center = new Vector3();
          box.getCenter(center);
          setCenter(center);

          // タイル内のすべてのオブジェクトに影とマテリアルを適用する
          const scene = useThree(({ scene }) => scene);
          scene.traverse((object) => {
            object.castShadow = true;
            object.receiveShadow = true;
            if (object instanceof Mesh) {
              object.material = material;
            }
          });
        }
      };

      return tiles;
    },
    [setCenter],
  );

  // TilesRenderer のライフサイクル
  const [tiles, setTiles] = useState(() => createTiles(path));
  const pathRef = useRef(path);

  useEffect(() => {
    if (path !== pathRef.current) {
      pathRef.current = path;
      setTiles(createTiles(path));
    }
  }, [path, createTiles]);

  useEffect(() => {
    return () => {
      tiles.dispose();
    };
  }, [tiles]);

  // TilesRendererとReactの状態を同期する
  const camera = useThree(({ camera }) => camera);
  const gl = useThree(({ gl }) => gl);

  useEffect(() => {
    tiles.setCamera(camera);
  }, [tiles, camera]);

  useEffect(() => {
    tiles.setResolutionFromRenderer(camera, gl);
  }, [tiles, camera, gl]);

  useFrame(() => {
    tiles.update();
  });

  return <primitive object={tiles.group} />;
};
