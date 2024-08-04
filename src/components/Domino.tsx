import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef } from 'react';

export type DominoType = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

export const dominoPosY = 0;
export const dominoHeight = 1.4;

const boxMeshTopIndex = 2;
const boxMeshBottomIndex = 3;
const boxMeshFixedColor = 'white';

export const createDominoMesh = (domino: DominoType, i: number) => {
  const { position, rotation, color } = domino;
  const ref = useRef<RapierRigidBody>(null);

  return (
    <RigidBody
      ref={ref}
      colliders="cuboid"
      key={i}
      onCollisionEnter={(payload) => {
        console.log(payload.colliderObject?.uuid, ref.current?.isSleeping());
        // TODO: play sound
      }}
    >
      <mesh position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.6, dominoHeight, 0.2]} />

        {/* attach is required if you want to specify different colors for each face. */}
        {Array.from({ length: 6 }).map((_, i) => (
          <meshStandardMaterial
            key={i}
            attach={`material-${i}`}
            color={i === boxMeshTopIndex || i === boxMeshBottomIndex ? boxMeshFixedColor : color}
          />
        ))}
      </mesh>
    </RigidBody>
  );
};
