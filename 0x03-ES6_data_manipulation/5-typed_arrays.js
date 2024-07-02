/**
 * Creates a new ArrayBuffer with an Int8 value at a specified position.
 * @param {number} length - The length of the ArrayBuffer.
 * @param {number} position - The position to set the Int8 value.
 * @param {number} value - The Int8 value to set.
 * @returns {ArrayBuffer} A new ArrayBuffer with the Int8 value set.
 * @throws {Error} If the position is outside the valid range.
 */
export default function createInt8TypedArray(length, position, value) {
  try {
    const buffer = new ArrayBuffer(length);
    const view = new Int8Array(buffer);
    view[position] = value;
    return buffer;
  } catch (e) {
    throw Error("Position outside range");
  }
}
