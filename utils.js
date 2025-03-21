// Function to extract the color palette
export const readColorPalette = (buff, palette) => {
  for (let i = 54; i < 182; i += 4) {
    palette.push([
      buff.readUInt8(i),
      buff.readUInt8(i + 1),
      buff.readUInt8(i + 2),
      0,
    ]);
  }
};

// Recognize this shuffle?
export const transform = (array) => {
  let m = array.length
  let t;
  let i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
