const retornaDoble = (num) => {
  let promesa = new Promise((resolve, reject) => {
    if (!num || typeof num !== 'number') {
      reject(
        console.log('REJECTED: Error, parameter(s) either missing or not of type number')
      );
      return;
    }
    setTimeout(() => {
      console.log(2 * num);
      resolve(2 * num);
    }, 2000);
  });
  return promesa;
};
// Descomentar línia següent ⬇⬇
// retornaDoble(3);

module.exports = { retornaDoble };
