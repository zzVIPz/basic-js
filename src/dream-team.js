module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  return members
    .map(el => {
      if (typeof el === 'string') return el.trim().toUpperCase()[0];
    })
    .sort()
    .join('');
};
