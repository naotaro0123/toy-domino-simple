import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { ToyDominoSimple } from './components/ToyDominoSimple';

function App() {
  return (
    <>
      <Canvas camera={{ position: [6, 6, 12], zoom: 2.2 }}>
        {/* TopView */}
        {/* <Canvas camera={{ position: [0, 14, 0], zoom: 1.6 }}> */}
        <color attach="background" args={['lightgray']} />
        <OrbitControls />
        <ToyDominoSimple />
      </Canvas>
    </>
  );
}

export default App;
