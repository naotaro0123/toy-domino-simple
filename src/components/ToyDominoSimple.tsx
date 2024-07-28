import { Sphere } from '@react-three/drei';
import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { button, useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';

const dominoHeight = 1.4;
const dominoPosY = 0;
const floorOffset = 0.05;
const floorPosY = -dominoHeight / 2 - floorOffset;
const ballPosY = -0.4;
const ballPosZ = 4.2;

const randomColor = (): string => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r},${g},${b})`;
};

type DominoType = {
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

const createDominoMesh = (domino: DominoType, i: number) => {
  const { position, rotation, color } = domino;
  return (
    <RigidBody colliders="cuboid">
      <mesh key={i} position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.6, dominoHeight, 0.2]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
};

const createBallMesh = (isStart: boolean) => {
  const rb = useRef<RapierRigidBody>(null);

  useEffect(() => {
    if (isStart && rb.current) {
      rb.current.setTranslation({ x: 0, y: ballPosY, z: ballPosZ }, true);
      rb.current.setLinvel({ x: 0, y: 0, z: -4 }, true);
    }
  });

  return (
    <RigidBody ref={rb} colliders="ball" position={[0, ballPosY, ballPosZ]}>
      <Sphere args={[0.4]}>
        <meshStandardMaterial color={randomColor()} />
      </Sphere>
    </RigidBody>
  );
};

const createFloorMesh = () => {
  return (
    <RigidBody type="fixed" colliders="cuboid" position={[0, floorPosY, 0]}>
      <mesh castShadow>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color={'grey'} />
      </mesh>
    </RigidBody>
  );
};

const dominoSettings: DominoType[] = [
  { position: [0, dominoPosY, 3.0], color: randomColor() },
  { position: [0, dominoPosY, 2.2], color: randomColor() },
  { position: [0, dominoPosY, 1.4], color: randomColor() },
  { position: [0, dominoPosY, 0.6], color: randomColor() },
  { position: [0, dominoPosY, -0.2], color: randomColor() },
  { position: [0, dominoPosY, -1.0], color: randomColor() },
  { position: [0.2, dominoPosY, -1.8], rotation: [0, -Math.PI / 4, 0], color: randomColor() },
  { position: [0.8, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [1.6, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [2.4, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [3.2, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [4.0, dominoPosY, -2.0], rotation: [0, Math.PI / 4, 0], color: randomColor() },
  { position: [4.4, dominoPosY, -1.4], color: randomColor() },
  { position: [4.4, dominoPosY, -0.6], color: randomColor() },
  { position: [4.0, dominoPosY, 0.2], rotation: [0, -Math.PI / 4, 0], color: randomColor() },
  { position: [3.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [2.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [1.4, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [0.44, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  {
    position: [0.44, dominoPosY + dominoHeight, 0.6],
    rotation: [0, -Math.PI / 2, 0],
    color: randomColor(),
  },
  { position: [-0.44, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  {
    position: [-0.44, dominoPosY + dominoHeight, 0.6],
    rotation: [0, -Math.PI / 2, 0],
    color: randomColor(),
  },
  {
    position: [0, dominoPosY + dominoHeight * 2 - 0.2, 0.6],
    rotation: [Math.PI / 2, 0, Math.PI / 2],
    color: randomColor(),
  },
  { position: [-1.4, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [-2.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [-3.0, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
];

export const ToyDominoSimple = () => {
  const [debug, setDebug] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(false);

  useControls({
    debugMode: { value: debug, onChange: setDebug },
    start: button(() => setIsStart(true)),
    reset: button(() => window.location.reload()),
  });

  return (
    <>
      <group>
        <directionalLight position={[5, 5, 3]} intensity={2} />
        <directionalLight position={[-5, -5, -3]} intensity={2} />
      </group>
      <Physics debug={debug} colliders={false}>
        {createBallMesh(isStart)}
        {createFloorMesh()}
        {dominoSettings.map((domino, i) => createDominoMesh(domino, i))}
      </Physics>
    </>
  );
};
