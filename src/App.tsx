import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useState } from 'react';
import './App.css';
import { ToyDominoSimple } from './components/ToyDominoSimple';

const stages = [0, 1] as const;
type StageType = (typeof stages)[number];

function App() {
  const [debug, setDebug] = useState<boolean>(true);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [stage, setStage] = useState<StageType>(0);

  const changeStage = (stage: StageType) => {
    setStage(stage);
    setIsStart(false);
  };

  useControls({
    debugMode: { value: debug, onChange: setDebug },
    stage: { value: stage, options: stages, onChange: changeStage },
    start: button(() => setIsStart(true)),
    reset: button(() => window.location.reload()),
  });

  return (
    <>
      <Canvas>
        <PerspectiveCamera position={[6, 6, 12]} zoom={2.2} makeDefault={stage === 0} />
        <OrthographicCamera position={[0, 14, 0]} zoom={38} makeDefault={stage === 1} />
        <color attach="background" args={['lightgray']} />
        <OrbitControls />
        <ToyDominoSimple debug={debug} isStart={isStart} stage={stage} />
      </Canvas>
    </>
  );
}

export default App;
