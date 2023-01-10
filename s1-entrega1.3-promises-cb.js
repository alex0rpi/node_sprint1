// *##### Nivell 1 #####
// Ex1
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject()
que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge
diferent depenent de si la Promise es resol o no. */

// const funcio = (boolean) => {
//   return new Promise((resolve, reject) => {
//     let condicio = boolean;
//     if (condicio) {
//       resolve('Promesa realitzada');
//     } else {
//       reject('Promesa refusada.');
//     }
//   });
// };
// console.log(funcio(true));
// console.log(funcio(false));

// Ex2
/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const funcio2 = (param, cb) => {
  if (param) {
    cb('We got the data');
  } else {
    cb('Data not received');
  }
};

funcio2(false, (x) => console.log(x));

// *##### Nivell 2 #####
// Ex1
/* Donats els objectes employees i salaries, crea una arrow function getEmployee() que retorni
 una Promise efectuant la cerca en l'objecte pel seu id. */

let employees = [
  {
    id: 1,
    name: 'Linux Torvalds',
  },
  {
    id: 2,
    name: 'Bill Gates',
  },
  {
    id: 3,
    name: 'Jeff Bezos',
  },
];

let salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];

const getEmployee = () => {
  let promesa = new Promise((resolve, reject) => {});
};

// Ex2
// Ex3

// *##### Nivell 3 #####
// Ex1
