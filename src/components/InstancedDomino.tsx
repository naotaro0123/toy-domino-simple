import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { useRef } from 'react';
import { ballPrefix } from './Ball';

export type DominoType = {
  position: [number, number, number];
  rotation: [number, number, number];
  color: string;
};

export const dominoPosY = 0;
export const dominoHeight = 1.4;
export const dominoPrefix = 'domino-';

export const boxMeshTopIndex = 2;
export const boxMeshBottomIndex = 3;
export const boxMeshFixedColor = 'white';

type DominoProps = {
  domino: DominoType;
  i: number;
  isStart: boolean;
  onPlaySound: () => void;
};

export const InstancedDomino = ({ domino, i, isStart, onPlaySound }: DominoProps) => {
  const { position, rotation, color } = domino;
  const ref = useRef<RapierRigidBody>(null);

  return (
    <>
      <RigidBody
        ref={ref}
        colliders="cuboid"
        name={`${dominoPrefix}${i}-RigidBody`}
        key={i}
        onContactForce={(payload) => {
          if (!isStart) {
            return;
          }

          const { colliderObject, target } = payload;

          // Check if both objects are dominoes and the target domino has not been hit yet.
          if (
            (colliderObject?.name.startsWith(ballPrefix) ||
              colliderObject?.name.startsWith(dominoPrefix)) &&
            target?.colliderObject?.name.startsWith(dominoPrefix) &&
            !('isHit' in target.colliderObject.userData)
          ) {
            target.colliderObject.userData.isHit = true;
            onPlaySound();
          }
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
    </>
  );
};
