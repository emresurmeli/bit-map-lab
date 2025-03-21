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
processBitmap(process.argv[2]);
