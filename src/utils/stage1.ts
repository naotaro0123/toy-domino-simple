import { dominoPosY, DominoType } from '../components/Domino';

const colorDarkRed = '#B32F23';
const colorWhite = '#FFFFFF';
const colorDarkYellow = '#6F692B';
const colorSkin = '#E09D28';

const marioDominoLine = (posZ: number, colors: string[]): DominoType[] => {
  return [
    { position: [4.4, dominoPosY, posZ], color: colors[0] },
    { position: [3.6, dominoPosY, posZ], color: colors[1] },
    { position: [2.8, dominoPosY, posZ], color: colors[2] },
    { position: [2.0, dominoPosY, posZ], color: colors[3] },
    { position: [1.2, dominoPosY, posZ], color: colors[4] },
    { position: [0.4, dominoPosY, posZ], color: colors[5] },
    { position: [-0.4, dominoPosY, posZ], color: colors[6] },
    { position: [-1.2, dominoPosY, posZ], color: colors[7] },
    { position: [-2.0, dominoPosY, posZ], color: colors[8] },
    { position: [-2.8, dominoPosY, posZ], color: colors[9] },
    { position: [-3.6, dominoPosY, posZ], color: colors[10] },
    { position: [-4.4, dominoPosY, posZ], color: colors[11] },
  ];
};

export const stage1: DominoType[] = [
  // line 1
  { position: [0, dominoPosY, -8.0], color: colorWhite },
  // line 2
  { position: [0.4, dominoPosY, -7.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -7.5], color: colorWhite },
  // line 3
  { position: [-0.8, dominoPosY, -7.0], color: colorWhite },
  { position: [0, dominoPosY, -7.0], color: colorWhite },
  { position: [0.8, dominoPosY, -7.0], color: colorWhite },
  // line 4
  { position: [1.2, dominoPosY, -6.5], color: colorWhite },
  { position: [0.4, dominoPosY, -6.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -6.5], color: colorWhite },
  { position: [-1.2, dominoPosY, -6.5], color: colorWhite },
  // line 5
  { position: [1.6, dominoPosY, -6.0], color: colorWhite },
  { position: [0.8, dominoPosY, -6.0], color: colorWhite },
  { position: [0, dominoPosY, -6.0], color: colorWhite },
  { position: [-0.8, dominoPosY, -6.0], color: colorWhite },
  { position: [-1.6, dominoPosY, -6.0], color: colorWhite },
  // line 6
  { position: [2.0, dominoPosY, -5.5], color: colorWhite },
  { position: [1.2, dominoPosY, -5.5], color: colorWhite },
  { position: [0.4, dominoPosY, -5.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -5.5], color: colorWhite },
  { position: [-1.2, dominoPosY, -5.5], color: colorWhite },
  { position: [-2.0, dominoPosY, -5.5], color: colorWhite },
  // line 7
  { position: [2.4, dominoPosY, -5.0], color: colorWhite },
  { position: [1.6, dominoPosY, -5.0], color: colorWhite },
  { position: [0.8, dominoPosY, -5.0], color: colorWhite },
  { position: [0, dominoPosY, -5.0], color: colorWhite },
  { position: [-0.8, dominoPosY, -5.0], color: colorWhite },
  { position: [-1.6, dominoPosY, -5.0], color: colorWhite },
  { position: [-2.4, dominoPosY, -5.0], color: colorWhite },
  // line 8
  { position: [2.8, dominoPosY, -4.5], color: colorWhite },
  { position: [2.0, dominoPosY, -4.5], color: colorWhite },
  { position: [1.2, dominoPosY, -4.5], color: colorWhite },
  { position: [0.4, dominoPosY, -4.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -4.5], color: colorWhite },
  { position: [-1.2, dominoPosY, -4.5], color: colorWhite },
  { position: [-2.0, dominoPosY, -4.5], color: colorWhite },
  { position: [-2.8, dominoPosY, -4.5], color: colorWhite },
  // line 9
  { position: [3.2, dominoPosY, -4.0], color: colorWhite },
  { position: [2.4, dominoPosY, -4.0], color: colorWhite },
  { position: [1.6, dominoPosY, -4.0], color: colorWhite },
  { position: [0.8, dominoPosY, -4.0], color: colorWhite },
  { position: [0, dominoPosY, -4.0], color: colorWhite },
  { position: [-0.8, dominoPosY, -4.0], color: colorWhite },
  { position: [-1.6, dominoPosY, -4.0], color: colorWhite },
  { position: [-2.4, dominoPosY, -4.0], color: colorWhite },
  { position: [-3.2, dominoPosY, -4.0], color: colorWhite },
  // line 10
  { position: [3.6, dominoPosY, -3.5], color: colorWhite },
  { position: [2.8, dominoPosY, -3.5], color: colorWhite },
  { position: [2.0, dominoPosY, -3.5], color: colorWhite },
  { position: [1.2, dominoPosY, -3.5], color: colorWhite },
  { position: [0.4, dominoPosY, -3.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -3.5], color: colorWhite },
  { position: [-1.2, dominoPosY, -3.5], color: colorWhite },
  { position: [-2.0, dominoPosY, -3.5], color: colorWhite },
  { position: [-2.8, dominoPosY, -3.5], color: colorWhite },
  { position: [-3.6, dominoPosY, -3.5], color: colorWhite },
  // line 11
  { position: [4.0, dominoPosY, -3.0], color: colorWhite },
  { position: [3.2, dominoPosY, -3.0], color: colorWhite },
  { position: [2.4, dominoPosY, -3.0], color: colorWhite },
  { position: [1.6, dominoPosY, -3.0], color: colorWhite },
  { position: [0.8, dominoPosY, -3.0], color: colorWhite },
  { position: [0, dominoPosY, -3.0], color: colorWhite },
  { position: [-0.8, dominoPosY, -3.0], color: colorWhite },
  { position: [-1.6, dominoPosY, -3.0], color: colorWhite },
  { position: [-2.4, dominoPosY, -3.0], color: colorWhite },
  { position: [-3.2, dominoPosY, -3.0], color: colorWhite },
  { position: [-4.0, dominoPosY, -3.0], color: colorWhite },
  // line 12
  { position: [4.4, dominoPosY, -2.5], color: colorWhite },
  { position: [3.6, dominoPosY, -2.5], color: colorWhite },
  { position: [2.8, dominoPosY, -2.5], color: colorWhite },
  { position: [2.0, dominoPosY, -2.5], color: colorWhite },
  { position: [1.2, dominoPosY, -2.5], color: colorWhite },
  { position: [0.4, dominoPosY, -2.5], color: colorWhite },
  { position: [-0.4, dominoPosY, -2.5], color: colorWhite },
  { position: [-1.2, dominoPosY, -2.5], color: colorWhite },
  { position: [-2.0, dominoPosY, -2.5], color: colorWhite },
  { position: [-2.8, dominoPosY, -2.5], color: colorWhite },
  { position: [-3.6, dominoPosY, -2.5], color: colorWhite },
  { position: [-4.4, dominoPosY, -2.5], color: colorWhite },

  // reference: https://pixel-art.tsurezure-brog.com/home/super-mario-chibi/
  // mario line 16
  ...marioDominoLine(-2.0, [
    ...Array.from({ length: 3 }, () => colorWhite),
    ...Array.from({ length: 5 }, () => colorDarkRed),
    ...Array.from({ length: 4 }, () => colorWhite),
  ]),
  // mario line 15
  ...marioDominoLine(-1.5, [
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 9 }, () => colorDarkRed),
    colorWhite,
  ]),
  // mario line 14
  ...marioDominoLine(-1.0, [
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    ...Array.from({ length: 2 }, () => colorSkin),
    colorDarkYellow,
    colorSkin,
    ...Array.from({ length: 3 }, () => colorWhite),
  ]),
  // mario line 13
  ...marioDominoLine(-0.5, [
    colorWhite,
    colorDarkYellow,
    colorSkin,
    colorDarkYellow,
    ...Array.from({ length: 3 }, () => colorSkin),
    colorDarkYellow,
    ...Array.from({ length: 3 }, () => colorSkin),
    colorWhite,
  ]),
  // mario line 12
  ...marioDominoLine(0.0, [
    colorWhite,
    colorDarkYellow,
    colorSkin,
    ...Array.from({ length: 2 }, () => colorDarkYellow),
    ...Array.from({ length: 3 }, () => colorSkin),
    colorDarkYellow,
    ...Array.from({ length: 3 }, () => colorSkin),
  ]),
  // mario line 11
  ...marioDominoLine(0.5, [
    colorWhite,
    ...Array.from({ length: 2 }, () => colorDarkYellow),
    ...Array.from({ length: 4 }, () => colorSkin),
    ...Array.from({ length: 4 }, () => colorDarkYellow),
    colorWhite,
  ]),
  // mario line 10
  ...marioDominoLine(1.0, [
    ...Array.from({ length: 3 }, () => colorWhite),
    ...Array.from({ length: 7 }, () => colorSkin),
    ...Array.from({ length: 2 }, () => colorWhite),
  ]),
  // mario line 9
  ...marioDominoLine(1.5, [
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 2 }, () => colorDarkYellow),
    colorDarkRed,
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    ...Array.from({ length: 4 }, () => colorWhite),
  ]),
  // mario line 8
  ...marioDominoLine(2.0, [
    colorWhite,
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    colorDarkRed,
    ...Array.from({ length: 2 }, () => colorDarkYellow),
    colorDarkRed,
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    colorWhite,
  ]),
  // mario line 7
  ...marioDominoLine(2.5, [
    ...Array.from({ length: 4 }, () => colorDarkYellow),
    ...Array.from({ length: 4 }, () => colorDarkRed),
    ...Array.from({ length: 4 }, () => colorDarkYellow),
  ]),
  // marion line 6
  ...marioDominoLine(3.0, [
    ...Array.from({ length: 2 }, () => colorSkin),
    colorDarkYellow,
    colorDarkRed,
    colorSkin,
    ...Array.from({ length: 2 }, () => colorDarkRed),
    colorSkin,
    colorDarkRed,
    colorDarkYellow,
    ...Array.from({ length: 2 }, () => colorSkin),
  ]),
  // mario line 5
  ...marioDominoLine(3.5, [
    ...Array.from({ length: 3 }, () => colorSkin),
    ...Array.from({ length: 6 }, () => colorDarkRed),
    ...Array.from({ length: 3 }, () => colorSkin),
  ]),
  // mario line 4
  ...marioDominoLine(4.0, [
    ...Array.from({ length: 2 }, () => colorSkin),
    ...Array.from({ length: 8 }, () => colorDarkRed),
    ...Array.from({ length: 2 }, () => colorSkin),
  ]),
  // mario line 3
  ...marioDominoLine(4.5, [
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorDarkRed),
    ...Array.from({ length: 2 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorDarkRed),
    ...Array.from({ length: 2 }, () => colorWhite),
  ]),
  // mario line 2
  ...marioDominoLine(5.0, [
    colorWhite,
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    ...Array.from({ length: 4 }, () => colorWhite),
    ...Array.from({ length: 3 }, () => colorDarkYellow),
    colorWhite,
  ]),
  // marion line 1
  ...marioDominoLine(5.5, [
    ...Array.from({ length: 4 }, () => colorDarkYellow),
    ...Array.from({ length: 4 }, () => colorWhite),
    ...Array.from({ length: 4 }, () => colorDarkYellow),
  ]),
  // mario line 0
  ...marioDominoLine(6.0, [...Array.from({ length: 12 }, () => colorWhite)]),
];
