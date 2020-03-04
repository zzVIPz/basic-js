module.exports = function repeater(str, options) {
  if (options.repeatTimes) {
    options.separator ? options.separator : (options.separator = '+');
    let addStr = '';
    if (options.additionRepeatTimes) {
      addStr = getAddSrt(options);
    }
    let result = [];
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(str + addStr);
    }
    return result.join(options.separator);
  } else {
    return str + getAddSrt(options);
  }
};

function getAddSrt(options) {
  let addStrItems = [];
  options.additionSeparator ? options.additionSeparator : (options.additionSeparator = '|');
  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      addStrItems.push(options.addition + '');
    }
    return addStrItems.join(options.additionSeparator);
  } else {
    return options.addition + '';
  }
}
