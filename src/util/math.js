/**
 * Returns a random number between min (inclusive) and max (exclusive)
 */
let getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
};

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
let getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export {
  getRandomArbitrary,
  getRandomInt
}