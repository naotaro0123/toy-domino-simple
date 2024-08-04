import { Physics } from '@react-three/rapier';
import { dominoSettings } from '../utils/dominoSettings';
import { createBallMesh } from './Ball';
import { createDominoMesh } from './Domino';
import { createFloorMesh } from './Floor';

type ToyDominoProps = {
  debug: boolean;
  isStart: boolean;
  stage: number;
};

export const ToyDominoSimple = (props: ToyDominoProps) => {
  const { debug, isStart, stage } = props;
  return (
    <>
      <group>
        <directionalLight position={[5, 5, 3]} intensity={2} />
        <directionalLight position={[-5, -5, -3]} intensity={2} />
      </group>
      <Physics debug={debug} colliders={false}>
        {createBallMesh(isStart, dominoSettings[stage].ball)}
        {createFloorMesh(dominoSettings[stage].floor)}
        {dominoSettings[stage].dominos.map((domino, i) => createDominoMesh(domino, i))}
      </Physics>
    </>
  );
};
