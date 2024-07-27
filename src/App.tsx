import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { HelloCube } from './components/HelloCube';

function App() {
  return (
    <>
      <Canvas camera={{ position: [0, 6, -10], zoom: 1.6 }}>
        <color attach="background" args={['lightgray']} />
        <OrbitControls />
        <HelloCube />
      </Canvas>
    </>
  );
}

export default App;
