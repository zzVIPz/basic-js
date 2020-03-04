const SEASONS = {
  0: 'winter',
  1: 'winter',
  2: 'spring',
  3: 'spring',
  4: 'spring',
  5: 'summer',
  6: 'summer',
  7: 'summer',
  8: 'fall',
  9: 'fall',
  10: 'fall',
  11: 'winter'
};

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (date.hasOwnProperty('toString')) throw new Error();
  return SEASONS[date.getMonth()];
};
