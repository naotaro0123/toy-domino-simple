import { OrbitControls, OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { button, useControls } from 'leva';
import { useState } from 'react';
import './App.css';
import { ToyDominoSimple } from './components/ToyDominoSimple';
import { dominoSettings } from './utils/dominoSettings';

const stages = [0, 1, 2] as const;
type StageType = (typeof stages)[number];

function App() {
  const [debug, setDebug] = useState<boolean>(false);
  const [isStart, setIsStart] = useState<boolean>(false);
  const [stage, setStage] = useState<StageType>(0);

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

        {stage === 0 ? (
          <>
            <PerspectiveCamera position={[6, 6, 12]} zoom={2.2} makeDefault />
            <ToyDominoSimple debug={debug} isStart={isStart} setting={dominoSettings[stage]} />
          </>
        ) : (
          <></>
        )}

        {stage === 1 ? (
          <>
            <OrthographicCamera position={[0, 14, 0]} zoom={32} makeDefault />
            <ToyDominoSimple debug={debug} isStart={isStart} setting={dominoSettings[stage]} />
          </>
        ) : (
          <></>
        )}

        {/* {stage === 2 ? (
          <>
            <PerspectiveCamera position={[6, 6, 12]} zoom={1} makeDefault />
            <ToyDominoSimple debug={debug} isStart={isStart} setting={dominoSettings[stage]} />
            <PlateauTilesetTransform>
              <PlateauTileset
                path="a4/8ce415-8a43-485b-86a8-b09300dc94ff/13101_chiyoda-ku_pref_2023_citygml_1_op_bldg_3dtiles_13101_chiyoda-ku_lod1"
                center
              />
            </PlateauTilesetTransform>
          </>
        ) : (
          <></>
        )} */}
      </Canvas>
    </>
  );
}

export default App;
