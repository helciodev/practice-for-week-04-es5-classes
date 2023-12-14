Array.prototype.isEqual = function (arr) {
  if (arr.length !== this.length) {
    return false;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== this[i]) {
      return false;
    }
  }
  return true;
};

module.exports = Array;
