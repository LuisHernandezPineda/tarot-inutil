// src/lib/hash.js
// djb2 hash to int
export function hashStringToInt(str) {
  let hash = 5381;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) + hash) + str.charCodeAt(i); // hash * 33 + c
    hash = hash | 0; // force 32-bit
  }
  return Math.abs(hash);
}
