/**
 * Creates a new ArrayBuffer with an Int8 value at a specified position.
 * @param {number} length - The length of the ArrayBuffer (in bytes).
 * @param {number} position - The index to set the Int8 value.
 * @param {number} value - The Int8 value to set (between -128 and 127).
 * @returns {ArrayBuffer} A new ArrayBuffer with the Int8 value set.
 * @throws {RangeError} If the position or value is outside the valid range.
 */
export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new RangeError("Position outside valid range");
  }

  if (value < -128 || value > 127) {
    throw new RangeError("Value outside valid range for Int8");
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value;
  return buffer;
}

