module.exports = class DepthCalculator {
  counter = 1;
  calculateDepth(arr) {
    if (arr.some(el => Array.isArray(el))) {
      this.counter++;
      arr = arr.flat();
      return this.calculateDepth(arr);
    } else {
      let result = this.counter;
      this.counter = 1;
      return result;
    }
  }
};
