import { useLoader, useThree } from '@react-three/fiber';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';

export type ChildMethods = {
  playSound: () => void;
};

const soundUrl = '/toy-domino-simple/sounds/domino-collision.mp3';

export const Sound = forwardRef((_, ref) => {
  const sound = useRef<THREE.PositionalAudio>(null);
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, soundUrl);

  // setup sound
  useEffect(() => {
    if (!sound.current || !listener) return;

    sound.current.setBuffer(buffer);
    camera.add(listener);
  }, []);

  // play sound from parent component
  useImperativeHandle(ref, () => ({
    playSound() {
      if (sound.current) {
        sound.current.play();
      }
    },
  }));

  return <positionalAudio ref={sound} args={[listener]} />;
});
