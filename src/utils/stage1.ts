import { dominoPosY, DominoType } from '../components/Domino';

const colorBlack = '#000000';
const colorWhite = '#FFFFFF';
const colorRed = '#FF0000';
const rotation: DominoType['rotation'] = [0, Math.PI / 2, 0];

const numberDominoLine = (posX: number, colors: string[]): DominoType[] => {
  return [
    { position: [posX, dominoPosY, 2.8], rotation, color: colors[0] },
    { position: [posX, dominoPosY, 2.0], rotation, color: colors[1] },
    { position: [posX, dominoPosY, 1.2], rotation, color: colors[2] },
    { position: [posX, dominoPosY, 0.4], rotation, color: colors[3] },
    { position: [posX, dominoPosY, -0.4], rotation, color: colors[4] },
    { position: [posX, dominoPosY, -1.2], rotation, color: colors[5] },
    { position: [posX, dominoPosY, -2.0], rotation, color: colors[6] },
    { position: [posX, dominoPosY, -2.8], rotation, color: colors[7] },
  ];
};

// reference: https://www.domino.or.jp/start-a-33.html
export const stage1: DominoType[] = [
  // line 1
  { position: [-8.5, dominoPosY, 0.0], rotation, color: colorBlack },
  // line 2
  { position: [-8.0, dominoPosY, 0.0], rotation, color: colorBlack },
  // line 3
  { position: [-7.5, dominoPosY, 0.0], rotation, color: colorBlack },
  // line 4
  { position: [-7.0, dominoPosY, 0.4], rotation, color: colorBlack },
  { position: [-7.0, dominoPosY, -0.4], rotation, color: colorBlack },
  // line 5
  { position: [-6.5, dominoPosY, 0.8], rotation, color: colorBlack },
  { position: [-6.5, dominoPosY, 0.0], rotation, color: colorBlack },
  { position: [-6.5, dominoPosY, -0.8], rotation, color: colorBlack },
  // line 6
  { position: [-6.0, dominoPosY, 1.2], rotation, color: colorBlack },
  { position: [-6.0, dominoPosY, 0.4], rotation, color: colorBlack },
  { position: [-6.0, dominoPosY, -0.4], rotation, color: colorBlack },
  { position: [-6.0, dominoPosY, -1.2], rotation, color: colorBlack },
  // line 7
  { position: [-5.5, dominoPosY, 1.6], rotation, color: colorBlack },
  { position: [-5.5, dominoPosY, 0.8], rotation, color: colorBlack },
  { position: [-5.5, dominoPosY, 0.0], rotation, color: colorBlack },
  { position: [-5.5, dominoPosY, -0.8], rotation, color: colorBlack },
  { position: [-5.5, dominoPosY, -1.6], rotation, color: colorBlack },
  // line 8
  { position: [-5.0, dominoPosY, 2.0], rotation, color: colorBlack },
  { position: [-5.0, dominoPosY, 1.2], rotation, color: colorBlack },
  { position: [-5.0, dominoPosY, 0.4], rotation, color: colorBlack },
  { position: [-5.0, dominoPosY, -0.4], rotation, color: colorBlack },
  { position: [-5.0, dominoPosY, -1.2], rotation, color: colorBlack },
  { position: [-5.0, dominoPosY, -2.0], rotation, color: colorBlack },
  // line 9
  { position: [-4.5, dominoPosY, 2.4], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, 1.6], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, 0.8], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, 0.0], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, -0.8], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, -1.6], rotation, color: colorBlack },
  { position: [-4.5, dominoPosY, -2.4], rotation, color: colorBlack },
  // line 10
  { position: [-4.0, dominoPosY, 2.8], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, 2.0], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, 1.2], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, 0.4], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, -0.4], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, -1.2], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, -2.0], rotation, color: colorBlack },
  { position: [-4.0, dominoPosY, -2.8], rotation, color: colorBlack },

  // number line 1
  ...numberDominoLine(-3.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 2
  ...numberDominoLine(-3.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 3
  ...numberDominoLine(-2.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 4
  ...numberDominoLine(-2.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 5
  ...numberDominoLine(-1.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 6
  ...numberDominoLine(-1.0, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 7
  ...numberDominoLine(-0.5, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 8
  ...numberDominoLine(0.0, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 9
  ...numberDominoLine(0.5, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 4 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 10
  ...numberDominoLine(1.0, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 4 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 11
  ...numberDominoLine(1.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 12
  ...numberDominoLine(2.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 13
  ...numberDominoLine(2.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 14
  ...numberDominoLine(3.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 15
  ...numberDominoLine(3.5, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 6 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 16
  ...numberDominoLine(4.0, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 6 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 17
  ...numberDominoLine(4.5, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 4 }, () => colorWhite),
    ...Array.from({ length: 1 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 18
  ...numberDominoLine(5.0, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 6 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 19
  ...numberDominoLine(5.5, [
    ...Array.from({ length: 1 }, () => colorWhite),
    ...Array.from({ length: 6 }, () => colorRed),
    ...Array.from({ length: 1 }, () => colorWhite),
  ]),
  // number line 20
  ...numberDominoLine(6.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 21
  ...numberDominoLine(6.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 22
  ...numberDominoLine(7.0, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 23
  ...numberDominoLine(7.5, [...Array.from({ length: 8 }, () => colorWhite)]),
  // number line 24
  ...numberDominoLine(8.0, [...Array.from({ length: 8 }, () => colorWhite)]),
];
