import { BoxGeometryProps } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { dominoHeight } from './Domino';

const floorOffset = 0.05;
const floorPosY = -dominoHeight / 2 - floorOffset;

export const createFloorMesh = (props: BoxGeometryProps) => {
  return (
    <RigidBody name="Floor-RigidBody" type="fixed" colliders="cuboid" position={[0, floorPosY, 0]}>
      <mesh castShadow>
        <boxGeometry {...props} />
        <meshStandardMaterial color={'grey'} />
      </mesh>
    </RigidBody>
  );
};
