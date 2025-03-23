// Function to extract the color palette
export const readColorPalette = (buff, palette) => {
  // TODO: Research how to read the color palette from a bitmap file and implement it
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
