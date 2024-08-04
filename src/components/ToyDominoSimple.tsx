import { Physics } from '@react-three/rapier';
import { DominoSetting } from '../utils/dominoSettings';
import { createBallMesh } from './Ball';
import { createDominoMesh } from './Domino';
import { createFloorMesh } from './Floor';

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
        {createBallMesh(isStart, setting.ball)}
        {createFloorMesh(setting.floor)}
        {setting.dominos.map((domino, i) => createDominoMesh(domino, i))}
      </Physics>
    </>
  );
};
