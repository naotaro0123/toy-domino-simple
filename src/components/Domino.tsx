import { RigidBody } from '@react-three/rapier';

export type DominoType = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

export const dominoPosY = 0;
export const dominoHeight = 1.4;

const meshTopIndex = 2;
const meshBottomIndex = 3;
const meshFixedColor = 'white';

export const createDominoMesh = (domino: DominoType, i: number) => {
  const { position, rotation, color } = domino;
  return (
    <RigidBody colliders="cuboid" key={i}>
      <mesh position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.6, dominoHeight, 0.2]} />

        {Array.from({ length: 6 }).map((_, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            color={i === meshTopIndex || i === meshBottomIndex ? meshFixedColor : color}
          />
        ))}
      </mesh>
    </RigidBody>
  );
};
