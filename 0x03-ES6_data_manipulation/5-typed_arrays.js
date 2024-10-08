/**
 * Creates a new ArrayBuffer with an Int8 value at a specific position.
 * @param {number} length - The length of the ArrayBuffer (in bytes).
 * @param {number} position - The index to set the Int8 value.
 * @param {number} value - The Int8 value to set (between -128 and 127).
 * @returns {ArrayBuffer} A new ArrayBuffer with the Int8 value set.
 * @throws {Error} If the position is outside the valid range or value is outside the range for Int8.
 */
function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error("Position outside range");
  }

  if (value < -128 || value > 127) {
    throw new Error("Value outside range for Int8");  // Specific error message
  }

  const buffer = new ArrayBuffer(length);
  const view = new Int8Array(buffer);
  view[position] = value; 
  return buffer;
}

