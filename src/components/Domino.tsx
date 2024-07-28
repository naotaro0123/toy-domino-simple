import { RigidBody } from '@react-three/rapier';

export type DominoType = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

export const dominoPosY = 0;
export const dominoHeight = 1.4;

export const createDominoMesh = (domino: DominoType, i: number) => {
  const { position, rotation, color } = domino;
  return (
    <RigidBody colliders="cuboid" key={i}>
      <mesh position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.6, dominoHeight, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
};
