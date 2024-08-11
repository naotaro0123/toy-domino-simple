import { useLoader, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const soundUrl = '/toy-domino-simple/sounds/domino-collision.mp3';

export const Sound = () => {
  const sound = useRef<THREE.PositionalAudio>(null);
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, soundUrl);

  useEffect(() => {
    if (!sound.current || !listener) return;

    sound.current.setBuffer(buffer);
    // sound.current.setRefDistance(1);
    // sound.current.setLoop(true);
    // sound.current.play();
    camera.add(listener);
  }, []);

  return <positionalAudio ref={sound} args={[listener]} />;
};
