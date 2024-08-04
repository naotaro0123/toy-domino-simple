import { Physics } from '@react-three/rapier';
import { button, useControls } from 'leva';
import { useState } from 'react';
import { dominoSettings } from '../utils/dominoSetting';
import { createBallMesh } from './Ball';
import { createDominoMesh } from './Domino';
import { createFloorMesh } from './Floor';

const stages = [0, 1] as const;
type StageType = (typeof stages)[number];

export const ToyDominoSimple = () => {
  const [debug, setDebug] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [stage, setStage] = useState<StageType>(1);

  useControls({
    debugMode: { value: debug, onChange: setDebug },
    stage: { value: stage, options: stages, onChange: setStage },
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
        {createBallMesh(isStart, dominoSettings[stage].ball)}
        {createFloorMesh(dominoSettings[stage].floor)}
        {dominoSettings[stage].dominos.map((domino, i) => createDominoMesh(domino, i))}
      </Physics>
    </>
  );
};
