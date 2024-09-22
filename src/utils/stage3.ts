import { dominoPosY, DominoType } from '../components/Domino';
import { randomColor } from './color';

export const stage3: DominoType[] = [
  { position: [5, dominoPosY, 5], color: randomColor() },
  { position: [5, dominoPosY, 4], color: randomColor() },
  { position: [5, dominoPosY, 3], color: randomColor() },
  { position: [5, dominoPosY, 2], color: randomColor() },
  { position: [5, dominoPosY, 1], color: randomColor() },
];
