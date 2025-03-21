import fs from "fs/promises";
import { Bitmap } from "./bitmap-object.js";
import { transform } from "./transform.js";

// Function to extract the color palette
const readColorPalette = (buff) => {
  for (let i = 54; i < 182; i += 4) {
    palette.push([
      buff.readUInt8(i),
      buff.readUInt8(i + 1),
      buff.readUInt8(i + 2),
      0,
    ]);
  }
};

async function processBitmap() {
  try {
    // Read the bitmap file into a buffer
    const buffer = await fs.readFile("./img/bitmap1.bmp");

    // Convert buffer into a JavaScript object
    const bitmapData = new Bitmap(buffer);

    // Create an array to hold the color palette
    let palette = [];

    // Read color palette
    readColorPalette(buffer);

    // Apply transformation to the palette
    transform(palette);

    // TODO: Convert the transformed palette back into the buffer

    // TODO: Write the transformed buffer to a new file

    console.log(
      "Transformation complete! Check the img folder for the new bitmap."
    );
  } catch (error) {
    console.error("Error processing bitmap:", error);
  }
}

// Run the function
processBitmap();
