const CONTROLS = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

module.exports = function transform(arr) {
  if (Array.isArray(arr)) {
    if (arr[0] === CONTROLS[1] || arr[0] === CONTROLS[3]) arr.shift();
    if (arr[arr.length - 1] === CONTROLS[0] || arr[arr.length - 1] === CONTROLS[2]) arr.pop();

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case CONTROLS[2]:
          arr.splice(i, 1, arr[i + 1]);
          break;

        case CONTROLS[3]:
          arr.splice(i, 1, arr[i - 1]);
          break;
      }
    }

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case CONTROLS[0]:
          arr.splice(i, 2);
          i--;
          break;

        case CONTROLS[1]:
          i > 0 ? arr.splice(i - 1, 2) : arr.splice(i, 1);
          i--;
          break;
      }
    }
  } else {
    throw new Error();
  }
  return arr;
};
