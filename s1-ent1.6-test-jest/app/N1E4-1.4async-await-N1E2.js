// *##### Nivell 1 #####
// !Ex2
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que 
efectuï la seva funció resolve() DESPRES de 2 segons de la seva invocació. */
const asyncf2 = () => {
  let promesa = new Promise((resolve) => {
    console.log('Crida efectuada');
    console.log('Promesa pending');
    setTimeout(() => {
      resolve('Promesa resolta després de 2 segons');
    }, 2000);
  });
  return promesa;
};

const asyncf1 = async () => {
  const result = await asyncf2();
  console.log(result);
};

module.exports = { asyncf1, asyncf2 };
