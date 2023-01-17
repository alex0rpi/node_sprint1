// *##### Nivell 1 #####
// Ex2
/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

exports.funcio2 = function funcio2(param, cb) {
  if (param) {
    cb('Habemus papam');
  } else {
    cb('Non habemus papam');
  }
};
function cb(x) {
  console.log(x);
  return x;
}
funcio2(true, cb);
funcio2(false, cb);
