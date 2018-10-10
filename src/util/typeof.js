let isObject = function(value) {
  var toString = Object.prototype.toString;
  
  return toString.call(value) === '[object Object]';
};

export {
  isObject
}