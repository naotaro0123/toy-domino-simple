import { Physics } from '@react-three/rapier';
import { DominoSetting } from '../utils/dominoSettings';
import { Ball } from './Ball';
import { Domino } from './Domino';
import { Floor } from './Floor';
import { Sound } from './Sound';

type ToyDominoProps = {
  debug: boolean;
  isStart: boolean;
  setting: DominoSetting;
};

export const ToyDominoSimple = (props: ToyDominoProps) => {
  const { debug, isStart, setting } = props;
  return (
    <>
      <Physics debug={debug} colliders={false}>
        <Ball isStart={isStart} setting={setting.ball} />
        <Floor args={setting.floor.args} />
        <Sound />
        {setting.dominos.map((domino, i) => (
          <Domino key={i} domino={domino} i={i} />
        ))}
      </Physics>
    </>
  );
};
