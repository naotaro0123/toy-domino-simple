import { DominoType } from '../components/Domino';
import { stage0 } from './stage0';
import { stage1 } from './stage1';

export type BallSetting = {
  // initial Position
  position: { x: number; y: number; z: number };
  // rolling direction and speed
  linvel: { x: number; y: number; z: number };
};

export type DominoSetting = {
  dominos: DominoType[];
  ball: BallSetting;
  floor: { args: [number, number, number] };
};

export const dominoSettings: DominoSetting[] = [
  {
    dominos: stage0,
    ball: {
      position: { x: 0, y: -0.4, z: 4.2 },
      linvel: { x: 0, y: 0, z: -4 },
    },
    floor: { args: [10, 0.1, 10] },
  },
  {
    dominos: stage1,
    ball: {
      position: { x: 0, y: -0.4, z: -9.5 },
      linvel: { x: 0, y: 0, z: 8 },
    },
    floor: { args: [20, 0.1, 20] },
  },
];
