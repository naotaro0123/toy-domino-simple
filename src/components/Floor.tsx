import { RigidBody } from '@react-three/rapier';
import { dominoHeight } from './Domino';

const floorOffset = 0.05;
const floorPosY = -dominoHeight / 2 - floorOffset;

export const createFloorMesh = () => {
  return (
    <RigidBody type="fixed" colliders="cuboid" position={[0, floorPosY, 0]}>
      <mesh castShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color={'grey'} />
      </mesh>
    </RigidBody>
  );
};
