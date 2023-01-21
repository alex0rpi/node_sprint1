exports.sumar = function sumar(a, b) {
  if (!a || !b) throw new Error('input data missing (undefined)');
  if (isNaN(a || b)) throw new Error('invalid input data');
  return a + b;
}

exports.restar = function restar(a, b) {
  if (!a || !b) throw new Error('input data missing (undefined)');
  if (isNaN(a || b)) throw new Error('invalid input data');
  return a - b;
}

exports.multiplicar = function multiplicar(a, b) {
  if (!a || !b) throw new Error('input data missing (undefined)');
  if (isNaN(a || b)) throw new Error('invalid input data');
  return a * b;
}

exports.dividir = function dividir(a, b) {
  if (a === 0 && b === 0) throw new Error('result is undetermined');
  if (b === 0) throw new Error('result does not exist, denominator is zero');
  if (!a || !b) throw new Error('input data missing (undefined)');
  if (isNaN(a || b)) throw new Error('invalid input data');
  return a / b;
}

// module.exports = {
//   sumar,
//   restar,
//   multiplicar,
//   dividir,
// };
