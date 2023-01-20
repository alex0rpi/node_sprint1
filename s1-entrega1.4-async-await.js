// *##### Nivell 1 #####
// !Ex1
/* Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi 
per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() 
i getSalary() que has definit a la tasca anterior. */

/* Comentari: el Tomàs m'ha recordat la funcionalitat VSC d'executar amb F5 o start debugging
i anar pas per pas en l'execució amb la tecla F11. */

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
  /* A suggerència del Tomàs, retorno directament la Promise, abans feia
   "let promesa = new Promise" i la retornava abaix de tot. */
  return new Promise((resolve, reject) => {
    if (typeof id !== 'number') {
      console.log('REJECTED: Error, id received is not of type number');
      reject('REJECTED: Error, id received is not of type number');
      return;
    }
    for (let i in employees) {
      if (employees[i].id === id) {
        resolve(employees[i]);
        return;
      }
    }
    console.log('REJECTED: employee not found');
    reject('Employee not found');
  });
};

const getSalary = (objEmployee) => {
  return new Promise((resolve, reject) => {
    for (let i in salaries) {
      if (salaries[i].id === objEmployee.id) {
        resolve({
          name: objEmployee.name,
          salary: salaries[i].salary,
        });
        return;
      }
    }
    console.log('REJECTED: Salary not found');
    reject('REJECTED: Salary not found');
  });
};

const funcioAsync = async (idEmpleat) => {
  const { id, name } = await getEmployee(idEmpleat);
  const { salary } = await getSalary({ id, name });
  console.log({ name, salary });
};
funcioAsync(3);

// !Ex2
/* Crea una nova funció asíncrona que cridi a una altra (funció) que retorni una Promise que efectuï
la seva funció resolve() DESPRES de 2 segons de la seva invocació. */

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
// Descomentar línia següent ⬇⬇
// asyncf1();

// *##### Nivell 2 #####
// !Ex1
/* Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. */

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

/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir
la funció anterior. */

const suma3 = async (num1, num2, num3) => {
  // la funció retornaDoble() només accepta UN sol número per crida.
  // retornaDoble() retorna una promesa, la resolució de la qual l'esperem mitjançant "await".
  const resultat =
    (await retornaDoble(num1)) + (await retornaDoble(num2)) + (await retornaDoble(num3));
  console.log(`Result is ${resultat}`);
};
// Descomentar línia següent ⬇⬇
// suma3(1, 2, 3);

// *------------------------------------------------------------------------------------------
// *##### Nivell 3 #####
// !Ex1
/* Força i captura tants errors com puguis dels nivells 1 i 2. */
// !Nivell1 - Ex1

// Casos provats
// Introduir una string en comptes d'un id number. Descomentar línia següent ⬇⬇
// funcioAsync('a');

// Indroduir un id no trobable. Descomentar línia següent ⬇⬇
// funcioAsync(9);

// No passar cap paràmetre. Descomentar línia següent ⬇⬇
// funcioAsync('');

// !Nivell1 - Ex1
/* Crec que no es poden forçar errors aquí perquè cridem una funció sense cap paràmetre que pugui induir a error. */

// !Nivell2 - Ex1
/* Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. */
/* Aquí he forçat errors a l'hora de cridar la funcio retornaDoble. No li he vist sentit fer servir 
try/catch en aquí ja que tinc la promesa que farà reject en cas de paràmetre no vàlid. */
// Descomentar línia següent ⬇⬇
// retornaDoble('a');
// Descomentar línia següent ⬇⬇
// retornaDoble();

/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir
la funció anterior. */

//Afegeixo un bloc try catch a la funcio suma3 i li canvio el nom
const suma3again = async (num1, num2, num3) => {
  try {
    const resultat =
      (await retornaDoble(num1)) +
      (await retornaDoble(num2)) +
      (await retornaDoble(num3));
    console.log(`Result is ${resultat}`);
  } catch (error) {
    console.log(`Error catched: ${error}`);
  }
};

/* Crides provades forçant error. Descomentar-les una per una */
// suma3again(1, 2, 'a');
// suma3again(1, 'b', 'a');
// suma3again(1, 'a');
// suma3again(1, 2);
// suma3again(null, 1, 2);
// suma3again();
