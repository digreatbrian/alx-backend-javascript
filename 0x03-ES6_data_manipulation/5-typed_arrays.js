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

