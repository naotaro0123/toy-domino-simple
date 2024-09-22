import { dominoHeight, dominoPosY, DominoType } from '../components/Domino';
import { randomColor } from './color';

export const stage0: DominoType[] = [
  { position: [0.0, dominoPosY, 3.2], color: randomColor() },
  { position: [0.0, dominoPosY, 2.4], color: randomColor() },
  { position: [0.0, dominoPosY, 1.5], color: randomColor() },
  { position: [0.0, dominoPosY, 0.6], color: randomColor() },
  { position: [0.0, dominoPosY, -0.3], color: randomColor() },
  { position: [0.0, dominoPosY, -1.0], color: randomColor() },
  { position: [0.2, dominoPosY, -1.8], rotation: [0, -Math.PI / 4, 0], color: randomColor() },
  { position: [0.8, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [1.6, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [2.4, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [3.2, dominoPosY, -2.2], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [4.0, dominoPosY, -2.0], rotation: [0, Math.PI / 4, 0], color: randomColor() },
  { position: [4.4, dominoPosY, -1.4], color: randomColor() },
  { position: [4.4, dominoPosY, -0.6], color: randomColor() },
  { position: [4.0, dominoPosY, 0.2], rotation: [0, -Math.PI / 4, 0], color: randomColor() },
  { position: [3.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [2.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [1.4, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [0.44, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  {
    position: [0.44, dominoPosY + dominoHeight, 0.6],
    rotation: [0, -Math.PI / 2, 0],
    color: randomColor(),
  },
  { position: [-0.44, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  {
    position: [-0.44, dominoPosY + dominoHeight, 0.6],
    rotation: [0.0, -Math.PI / 2, 0.0],
    color: randomColor(),
  },
  {
    position: [0.0, dominoPosY + dominoHeight * 2.0 - 0.2, 0.6],
    rotation: [Math.PI / 2, 0, Math.PI / 2],
    color: randomColor(),
  },
  { position: [-1.4, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [-2.2, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
  { position: [-3.0, dominoPosY, 0.6], rotation: [0, -Math.PI / 2, 0], color: randomColor() },
];
