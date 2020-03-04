let chainMakerValue = [];

const chainMaker = {
  getLength() {
    return chainMakerValue.length;
  },
  addLink(value = '') {
    chainMakerValue.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (
      position < 1 ||
      position > chainMakerValue.length ||
      typeof position === 'string' ||
      parseInt(position) !== position
    ) {
      chainMakerValue = [];
      throw new Error();
    } else {
      chainMakerValue.splice(position - 1, 1);
    }
    return this;
  },
  reverseChain() {
    chainMakerValue.reverse();
    return this;
  },
  finishChain() {
    let result = chainMakerValue;
    chainMakerValue = [];
    return result.join('~~');
  }
};

module.exports = chainMaker;
