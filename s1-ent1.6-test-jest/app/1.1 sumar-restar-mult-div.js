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

/* Em pregunto si és més eficient alimentar una array d'errors */
// function dividir(a, b) {
//   let errors = [];
//   if (!a || !b) errors.push('input data missing (undefined)');
//   if (a === 'NaN' || b === 'NaN') errors.push('invalid input data');
//   if (a === 0 && b === 0) errors.push('result is undetermined');
//   if (b === 0) errors.push('result does not exist, denominator is zero');
//   for (let i in errors) {
//     if (errors[i]) console.log(errors[i]);
//   }
//   if (errors.length === 0) {
//     return a / b;
//   }
// }

// module.exports = {
//   sumar,
//   restar,
//   multiplicar,
//   dividir,
// };
