// *##### Nivell 1 #####
// !Ex2
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que 
efectuï la seva funció resolve() DESPRES de 2 segons de la seva invocació. */
const retornaDoble = (num) => {
  if (isNaN(num) || !num) throw new Error('please provide a number');
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let res = 2 * num;
      console.log(res);
      resolve(res);
    }, 2000);
  });
  return promise;
};

retornaDoble(6);

module.exports = retornaDoble;

/* const resolveAfter2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("resolved after 2 seconds");
        }, 2000);
    });
};

const newFunction = async () => {
    const result = await resolveAfter2();
    console.log(result);
};

newFunction();

module.exports.newFunction = newFunction; */
