import { Sphere } from '@react-three/drei';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useEffect, useRef } from 'react';
import { BallSetting } from '../utils/dominoSettings';

export const createBallMesh = (isStart: boolean, setting: BallSetting) => {
  const rb = useRef<RapierRigidBody>(null);
  const { position, linvel } = setting;

  useEffect(() => {
    if (isStart && rb.current) {
      // initial Position
      rb.current.setTranslation(position, true);
      // rolling direction and speed
      rb.current.setLinvel(linvel, true);
    }
  });

  return (
    <RigidBody
      ref={rb}
      name="Ball-RigidBody"
      colliders="ball"
      position={[position.x, position.y, position.z]}
    >
      <Sphere args={[0.4]}>
        <meshStandardMaterial color="red" />
      </Sphere>
    </RigidBody>
  );
};
