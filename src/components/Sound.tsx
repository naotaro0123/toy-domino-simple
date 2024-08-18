import { useLoader, useThree } from '@react-three/fiber';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import * as THREE from 'three';

export type ChildMethods = {
  playSound: () => void;
};

// this sound was random generated at `https://sfxr.me`.
const soundUrl = './toy-domino-simple/sounds/domino.wav';

export const Sound = forwardRef((_, ref) => {
  const sound = useRef<THREE.PositionalAudio>(null);
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, soundUrl);

  // setup sound
  useEffect(() => {
    if (!sound.current || !listener) return;

    sound.current.setBuffer(buffer);
    sound.current.setVolume(0.1);
    camera.add(listener);
  }, []);

  // play sound from parent component
  useImperativeHandle(ref, () => ({
    playSound() {
      if (sound.current) {
        if (sound.current.isPlaying) {
          sound.current.stop();
        }
        sound.current.play();
      }
    },
  }));

  return <positionalAudio ref={sound} args={[listener]} />;
});
