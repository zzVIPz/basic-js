const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  const TIME_HALF_LIFE = 0.693;
  if (typeof sampleActivity === 'string' && isNumeric(parseFloat(sampleActivity)))
    return +sampleActivity > 15 || +sampleActivity <= 0
      ? false
      : Math.ceil(
          Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) /
            (TIME_HALF_LIFE / HALF_LIFE_PERIOD)
        );
  return false;
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
