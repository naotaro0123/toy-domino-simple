import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useState } from 'react';
import './App.css';
import { ToyDominoSimple } from './components/ToyDominoSimple';
import { dominoSettings } from './settings/dominoSettings';

const stages = [0, 1, 2] as const;
export type StageType = (typeof stages)[number];
const defaultStage = 0 as const;

type StageCameraProps = {
  stage: StageType;
};
const StageCamera = (props: StageCameraProps) => {
  switch (props.stage) {
    case 0:
      return <PerspectiveCamera position={[6, 6, 12]} zoom={2.2} makeDefault />;
    case 1:
    case 2:
      return <OrthographicCamera position={[0, 14, 0]} zoom={32} makeDefault />;
  }
};

function App() {
  const [debug, setDebug] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [stage, setStage] = useState<StageType>(defaultStage);

  const changeStage = (stage: StageType) => {
    setStage(stage);
    setIsStart(false);
  };

  useControls({
    debugMode: { value: debug, onChange: setDebug },
    selectStage: { value: stage, options: stages, onChange: changeStage },
    start: button(() => setIsStart(true)),
    reset: button(() => window.location.reload()),
  });

  return (
    <>
      <Canvas>
        <color attach="background" args={['lightgray']} />
        <group>
          <directionalLight position={[5, 5, 3]} intensity={2} />
          <directionalLight position={[-5, -5, -3]} intensity={2} />
        </group>
        <OrbitControls />

        <StageCamera stage={stage} />
        <ToyDominoSimple
          key={stage}
          debug={debug}
          isStart={isStart}
          setting={dominoSettings[stage]}
          stage={stage}
        />
      </Canvas>
    </>
  );
}

export default App;
