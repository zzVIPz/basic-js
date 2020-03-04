module.exports = function countCats(backyard) {
  return backyard.reduce(
    (acc, val) => acc + val.reduce((acc, val) => acc + (val === '^^' ? 1 : 0), 0),
    0
  );
};
