import { Sphere } from '@react-three/drei';
import { Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';
import { button, useControls } from 'leva';
import { useEffect, useRef, useState } from 'react';

const dominoHeight = 1.4;
const dominoPosY = 0;
const floorOffset = 0.05;
const floorPosY = -dominoHeight / 2 - floorOffset;
const ballPosY = -0.5;
const ballPosZ = -4;

type DominoType = {
  id: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  color: string;
};

const createDominoMesh = (domino: DominoType) => {
  const { id, position, rotation, color } = domino;
  return (
    <RigidBody colliders="cuboid">
      <mesh key={id} name={id} position={position} rotation={rotation} castShadow>
        <boxGeometry args={[0.4, dominoHeight, 0.2]} />
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
      rb.current.setLinvel({ x: 0, y: 0, z: 2 }, true);
    }
  });

  return (
    <RigidBody ref={rb} colliders="ball" position={[0, ballPosY, ballPosZ]}>
      <Sphere args={[0.4]} castShadow>
        <meshStandardMaterial color={'red'} />
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
        {dominoSettings.map((domino) => createDominoMesh(domino))}
      </Physics>
    </>
  );
};
