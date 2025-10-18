
function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Input must be numbers!');
  }
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract }