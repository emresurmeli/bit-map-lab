// Docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
export class Bitmap {
  constructor(data) {
    this.headerSize = data.readUInt32LE(2);
    this.startAddress = data.readUInt32LE(10);
    this.width = data.readUInt32LE(18);
    this.height = data.readUInt32LE(22);
    this.imageSize = data.readUInt32LE(34);
    this.colorPalette = data.readUInt32LE(54);
  }
}
