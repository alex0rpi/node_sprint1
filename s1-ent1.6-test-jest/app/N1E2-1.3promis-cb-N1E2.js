// *##### Nivell 1 #####
// Ex2 - amb algunes modificacions incorporades per a verificar dades rebudes.
/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */
const funcioParamCb = (param, cb) => {
  if (typeof param !== 'boolean') throw new Error('parameter must be a boolean');
  if (!cb || typeof cb !== 'function')
    throw new Error('A callback function must be passed in');
  if (param) {
    cb('Habemus papam');
  } else {
    cb('Non habemus papam');
  }
};
function cb(x) {
  if (typeof x !== 'string') throw new Error('cb function received invalid data');
  console.log(x)
}

module.exports = { funcioParamCb, cb };
