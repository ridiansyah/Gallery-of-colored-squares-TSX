export const Near = (hex: string) => {
  let colorList = {
    red: "#ff0000",
    green: "#00ff00",
    yellow: "#ffff00",
    blue: "#0000ff",
    brown: "#8b4513",
    gray: "#808080",
    purple: "#800080",
    pink: "#ffc0cb",
  };
  let nearestColor = require("nearest-color").from(colorList);
  let getNear = nearestColor(hex);
  return getNear?.name;
};
