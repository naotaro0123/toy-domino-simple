import { InstancedRigidBodies, Physics } from '@react-three/rapier';
import { useRef } from 'react';
import { DominoSetting } from '../utils/dominoSettings';
import { Ball, ballPrefix } from './Ball';
import { Floor } from './Floor';
import { dominoHeight, dominoPrefix } from './InstancedDomino';
import { ChildMethods, Sound } from './Sound';

type ToyDominoProps = {
  debug: boolean;
  isStart: boolean;
  setting: DominoSetting;
};

export const ToyDominoSimple = (props: ToyDominoProps) => {
  const { debug, isStart, setting } = props;
  const soundRef = useRef<ChildMethods>(null);

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.playSound();
    }
  };

  return (
    <>
      <Physics debug={debug} colliders={false}>
        <Ball isStart={isStart} setting={setting.ball} />
        <Floor args={setting.floor.args} />
        <InstancedRigidBodies
          instances={setting.dominos.map((d, i) => ({
            ...d,
            key: i,
            name: `${dominoPrefix}${i}-RigidBody`,
            onContactForce: (payload) => {
              if (!isStart) {
                return;
              }

              const { colliderObject, target } = payload;
              console.log('#', colliderObject?.name, target?.colliderObject?.name);

              // Check if both objects are dominoes and the target domino has not been hit yet.
              if (
                (colliderObject?.name.startsWith(ballPrefix) ||
                  colliderObject?.name.startsWith(dominoPrefix)) &&
                target?.colliderObject?.name.startsWith(dominoPrefix) &&
                !('isHit' in target.colliderObject.userData)
              ) {
                console.log('hit');
                target.colliderObject.userData.isHit = true;
                playSound();
              }
            },
          }))}
          type="dynamic"
        >
          <instancedMesh args={[undefined, undefined, setting.dominos.length]} dispose={null}>
            <boxGeometry args={[0.6, dominoHeight, 0.2]} />
            <meshStandardMaterial color="white" />
          </instancedMesh>
        </InstancedRigidBodies>
        {/* {setting.dominos.map((domino, i) => (
          <Domino key={i} domino={domino} i={i} isStart={isStart} onPlaySound={playSound} />
        ))} */}
        <Sound ref={soundRef} />
      </Physics>
    </>
  );
};
