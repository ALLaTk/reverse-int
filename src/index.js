module.exports = function revers (n) {
  n = Math.abs(n) + '';
  let x = Array.from(n);
  let y = x.reverse();
  return Number(y.join(''));
}