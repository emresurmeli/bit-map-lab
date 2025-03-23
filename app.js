import fs from "fs/promises";

const processBitmap = async (bmpImgPath) => {
  try {
    // Read the bitmap file into a buffer
    // TODO: Research what a buffer is and understand why readFile returns a buffer
    const buffer = await fs.readFile(bmpImgPath);

    // Create an array to hold the color palette
    let palette = [];

    // TODO: Read color palette

    // TODO: Apply transformation to the palette (hint: use the transform function in utils.js)

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
