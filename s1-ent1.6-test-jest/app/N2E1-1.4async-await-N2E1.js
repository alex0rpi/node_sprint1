// !1.4N2E1
/* Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. */

const retornaDoble = (num) => {
  let promesa = new Promise((resolve, reject) => {
    if (!num || typeof num !== 'number') {
      reject('REJECTED: Error, parameter(s) either missing or not of type number');
      return;
    }
    setTimeout(() => {
      console.log(2 * num);
      resolve(2 * num);
    }, 2000);
  });
  return promesa;
};

module.exports = { retornaDoble };
