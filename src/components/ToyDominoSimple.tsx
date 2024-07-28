import { Physics } from '@react-three/rapier';
import { button, useControls } from 'leva';
import { useState } from 'react';
import { dominoSettings } from '../utils/dominoSetting';
import { createBallMesh } from './Ball';
import { createDominoMesh } from './Domino';
import { createFloorMesh } from './Floor';

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
        {createBallMesh(isStart, dominoSettings[0].ball)}
        {createFloorMesh()}
        {dominoSettings[0].dominos.map((domino, i) => createDominoMesh(domino, i))}
      </Physics>
    </>
  );
};
