// *##### Nivell 1 #####
// Ex1
/* Crea una funció que retorni una Promise que invoqui la funció resolve() o reject()
que rep. Invoca-la passant-li les dues funcions de manera que imprimeixin un missatge
diferent depenent de si la Promise es resol o no. */

const funcio = (condicio) => {
  return new Promise((resolve, reject) => {
    // Sorry, si que era raro, si :)
    if (condicio) {
      resolve('Promesa resolta');
    } else {
      reject('Promesa refusada.');
    }
  });
};
funcio(true).then((result) => console.log(result));
funcio(false).catch((err) => console.log(err));

// Ex2
/* Crea una arrow function que rebi un paràmetre i una funció callback i li passi a 
la funció un missatge o un altre (que s'imprimirà per consola) en funció del paràmetre rebut. */

const funcio2 = (param, cb) => {
  if (param) {
    cb('Habemus papam');
  } else {
    cb('Non habemus papam');
  }
};
function cb(x) {
  console.log(x);
}
funcio2(true, cb);
funcio2(false, cb);

// *##### Nivell 2 #####
// Ex1
/* Donats els objectes employees i salaries, crea una arrow function getEmployee() que
retorni una Promise efectuant la cerca en l'objecte pel seu id. */

let employees = [
  { id: 1, name: 'Linux Torvalds' },
  { id: 2, name: 'Bill Gates' },
  { id: 3, name: 'Jeff Bezos' },
];

let salaries = [
  { id: 1, salary: 4000 },
  { id: 2, salary: 1000 },
  { id: 3, salary: 2000 },
];

const getEmployee = (id) => {
  let promesa = new Promise((resolve, reject) => {
    for (let i in employees) {
      if (employees[i].id === id) {
        resolve(employees[i]);
        // retorno directament l'objecte de l'array
      }
    }
    reject({ message: 'Employee not found' });
  });
  return promesa;
};

getEmployee(1)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Ex2
/* Crea una altra arrow function getSalary() similar a l'anterior que rebi com a 
paràmetre un objecte employee i retorni el seu salari. */

const getSalary = (objEmployee) => {
  let laPromesa = new Promise((resolve, reject) => {
    for (let i in salaries) {
      if (salaries[i].id === objEmployee.id) {
        resolve({
          name: objEmployee.name,
          salary: salaries[i].salary,
        });
      }
    }
    reject({ message: 'Salary not found' });
  });
  return laPromesa;
};

getSalary({ id: 2, name: 'Bill Gates' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// Ex3
/* Invoca la primera funció getEmployee() i després getSalary() niant l'execució de les dues promises de 
manera que es retorni per la consola el nom de l'empleat/da i el seu salari. */
let ident = 2;
getEmployee(ident).then((result) => {
  getSalary(result).then((result) => {
    console.log(`El nom és ${result.name} i salari de ${result.salary}`);
  });
});

// *##### Nivell 3 #####
// Ex1
/* Fixa un element catch a la invocació del nivell anterior que capturi qualsevol error i el 
mostri per la consola. */
let id = 7;
getEmployee(id)
  .then((result) => {
    getSalary(result).then((result) => {
      console.log(`El nom és ${result.name} i salari de ${result.salary}`);
    });
  })
  .catch((error) => console.log(error));