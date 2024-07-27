import { Physics, RigidBody } from '@react-three/rapier';
import { button, useControls } from 'leva';
import { useState } from 'react';

const dominoHeight = 1.4;
const dominoPosY = 0;
const floorOffset = 0.05;
const floorPosY = -dominoHeight / 2 - floorOffset;

type DominoType = {
  id: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

const createDominoMesh = (domino: DominoType) => {
  const { id, position, rotation, color } = domino;
  return (
    <mesh key={id} name={id} position={position} rotation={rotation}>
      <boxGeometry args={[0.4, dominoHeight, 0.2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const randomColor = (): string => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

const dominoSettings: DominoType[] = [
  { id: '1', position: [0, dominoPosY, 1], color: randomColor() },
  { id: '2', position: [0, dominoPosY, 2], color: randomColor() },
  { id: '3', position: [0, dominoPosY, 3], color: randomColor() },
  { id: '4', position: [0, dominoPosY, 4], color: randomColor() },
];

export const ToyDominoSimple = () => {
  const [debug, setDebug] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [isReset, setIsReset] = useState<boolean>(false);

  useControls({
    debugMode: { value: debug, onChange: setDebug },
    start: button(() => setIsStart(true)),
    reset: button(() => {
      setIsReset(true);
      setIsStart(false);
    }),
  });

  return (
    <>
      <group>
        <directionalLight position={[5, 5, 3]} intensity={2} />
        <directionalLight position={[-5, -5, -3]} intensity={2} />
      </group>
      <Physics debug={debug} colliders={false}>
        {/* Floor */}
        <RigidBody type="fixed" colliders="cuboid" position={[0, floorPosY, 0]}>
          <mesh>
            <boxGeometry args={[10, 0.1, 10]} />
            <meshStandardMaterial color={'grey'} />
          </mesh>
        </RigidBody>

        {dominoSettings.map((domino) => (
          <RigidBody colliders="cuboid">{createDominoMesh(domino)}</RigidBody>
        ))}
      </Physics>
    </>
  );
};
