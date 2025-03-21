# Bitmap Transformer Lab

## Overview

In this lab, you will modernize a JavaScript project that reads a **bitmap (.bmp) file**, manipulates its **color palette**, and writes a new randomized version of the image. You'll learn about:

- **Binary file handling with Buffers**
- **ES6+ JavaScript features**
- **Reading and modifying bitmap image data**
- **Working with file streams in Node.js**

## Learning Objectives

By the end of this lab, you should be able to:

1. Use **fs/promises** to read and write files asynchronously.
2. Understand **bitmap file structure** and how color palettes are stored.
3. Modify a **Buffer** object to change image data.
4. Implement an **algorithm to transform** image colors.
5. Use modern **ES6+ JavaScript syntax**.

---

## Getting Started

1. Clone this repository.
2. Run `npm install` to ensure you have the required dependencies.
3. Run the script:  
   ```bash
   node app.js
   ```
4. Check the `img` folder to see the output file.

---

## How a Bitmap Works

A **bitmap (.bmp) file** is structured with a **header**, followed by **color data**.

- The **header (first 54 bytes)** contains metadata about the image.
- The **color palette (54 - 182 bytes)** holds **RGBA** values.
- The **pixel data** starts **after byte 182**.

In this lab, you'll manipulate the **color palette** by randomizing its order.

---

## TODOs in the Code

### 1. Convert the Transformed Palette Back to the Buffer

In `app.js`, after applying the transformation, you need to:

- Loop through the palette.
- Write back the new values into the buffer at the same positions.

**Hint:** Use `.writeUInt8()` to insert values back into the buffer.

```js
// TODO: Convert the transformed palette back into the buffer
palette.forEach((color, index) => {
  const offset = 54 + index * 4;
  buffer.writeUInt8(color[0], offset);
  buffer.writeUInt8(color[1], offset + 1);
  buffer.writeUInt8(color[2], offset + 2);
});
```

---

### 2. Write the Transformed Buffer to a New File

After modifying the buffer, you need to write it back as a new file.

**Hint:** Use `fs.writeFile()` to save the modified buffer.

```js
// TODO: Write the transformed buffer to a new file
await fs.writeFile('./img/randomized.bmp', buffer);
console.log('New bitmap saved as randomized.bmp');
```

---

## Stretch Goals

If you finish early, try these:

1. **Add More Transformations** – Try modifying brightness or swapping colors.
2. **Make It CLI-Based** – Accept a file path and transformation type as command-line arguments.
3. **Convert It to a Web App** – Create a frontend where users can upload images and apply transformations.

---

## Submission

- Push your completed code to GitHub.
- Share a link with your instructor for review.

Happy coding! 🚀
