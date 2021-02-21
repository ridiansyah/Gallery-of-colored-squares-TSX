import Color from "color";
import { Near } from "./nearestColor";

export const randomUpTo = (max: number) => {
  return Math.floor(Math.random() * max);
};

const randomColor = () => {
  const r = randomUpTo(255);
  const g = randomUpTo(255);
  const b = randomUpTo(255);
  let color = Color.rgb(r, g, b);
  let hexColor = color.hex();
  let gettingName = Near(hexColor);
  return { color: [r, g, b], name: gettingName, darker: color.isDark() };
};

export const generateColors = (n: number) => {
  return Array.from(new Array(n), randomColor);
};
