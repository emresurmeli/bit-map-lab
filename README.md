# Bitmap Transformer Lab

## Overview

In this lab, you will read a **bitmap (.bmp) file**, manipulates its **color palette**, and writes a new randomized version of the image. You'll learn about:

- **Binary file handling with Buffers**
- **Reading and modifying bitmap image data**
- **Working with file streams in Node.js**
- **Using command line(CLI) arguments to pass info into the sript

### Different difficulties exist for the lab on Git branches `easy` and `hard`:

Switch to them like this:
```cli
git checkout easy
git checkout hard
```


## Learning Objectives

By the end of this lab, you should be able to:

1. Use **fs/promises** to read and write files asynchronously.
2. Understand **bitmap file structure** and how color palettes are stored.
3. Modify a **Buffer** object to change image data.
4. Implement an **algorithm to transform** image colors.

---

## What is supplied in the lab

A few things have already been written for you, so first read the files and try to understand what it has implemented

1. There is a `utils.js` in which 2 functions are being exported: `readColorPalette(buff, palette)` and `transform(array)`. 
2. Understand **bitmap file structure** and how color palettes are stored. The `const buffer = await fs.readFile(bmpImgPath);` variable in app.js gives you a buffer. **Hint**: read the node.js docs on Buffers.

---

## How to do the lab:

1. Spend some time reading all of the code.
2. Follow the `// TODO` comments for instructions of what to implement.
3. Test your code by running: 
```cli
node app.js ./assets/bitmap-img.bmp
```
4. If it works - you should see a new .bmp file in the `assets/` folder with the transformation.
