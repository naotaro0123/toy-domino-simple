import { Physics } from '@react-three/rapier';
import { useRef } from 'react';
import { DominoSetting } from '../utils/dominoSettings';
import { Ball } from './Ball';
import { Domino } from './Domino';
import { Floor } from './Floor';
import { ChildMethods, Sound } from './Sound';

type ToyDominoProps = {
  debug: boolean;
  isStart: boolean;
  setting: DominoSetting;
};

export const ToyDominoSimple = (props: ToyDominoProps) => {
  const { debug, isStart, setting } = props;
  const soundRef = useRef<ChildMethods>(null);

  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.playSound();
    }
  };

  return (
    <>
      <Physics debug={debug} colliders={false}>
        <Ball isStart={isStart} setting={setting.ball} />
        <Floor args={setting.floor.args} />
        {setting.dominos.map((domino, i) => (
          <Domino key={i} domino={domino} i={i} isStart={isStart} onPlaySound={playSound} />
        ))}
        <Sound ref={soundRef} />
      </Physics>
    </>
  );
};
