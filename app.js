import fs from "fs/promises";
import { readColorPalette, transform } from "./utils.js";

const processBitmap = async (bmpImgPath) => {
  try {
    // Read the bitmap file into a buffer
    const buffer = await fs.readFile(bmpImgPath);

    // Create an array to hold the color palette
    let palette = [];

    // Read color palette
    readColorPalette(buffer, palette);

    // Apply transformation to the palette
    transform(palette);

    // Convert the transformed palette back into the buffer
    palette.forEach((color, index) => {
      const offset = 54 + index * 4;
      buffer.writeUInt8(color[0], offset);
      buffer.writeUInt8(color[1], offset + 1);
      buffer.writeUInt8(color[2], offset + 2);
    });

    // Write the transformed buffer to a new file
    await fs.writeFile("./assets/transformedFruit.bmp", buffer);
    console.log(
      "Transformation complete! Check the img folder for the new bitmap."
    );
  } catch (error) {
    console.error("Error processing bitmap:", error);
  }
}

// Run the function
processBitmap(process.argv[2]);
