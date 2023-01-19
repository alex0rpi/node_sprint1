// *##### Nivell 1 #####
// !Ex1
/* Crea una funció asíncrona que rebi un id d'empleat/da i imprimeixi 
per pantalla el nom de l'empleat/da i el seu salari, usant les funcions getEmployee() 
i getSalary() que has definit a la tasca anterior. */

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
        resolve({ message: 'Employee trobat', employeeName: employees[i].name });
      }
    }
    reject({ message: 'Employee not found' });
  });
  return promesa;
};

const getSalary = (objEmployee) => {
  let laPromesa = new Promise((resolve, reject) => {
    for (let i in salaries) {
      if (salaries[i].id === objEmployee.id) {
        resolve({
          message: 'Salary trobat',
          empName: objEmployee.name,
          salary: salaries[i].salary,
        });
      }
    }
    reject({ message: 'Salary not found' });
  });
  return laPromesa;
};

// const funcioAsync = async (idEmpleat) => {
//   const { employeeName: nomEmpleat } = await getEmployee(idEmpleat);
//   const { salary: salariEmpleat } = await getSalary({ id: idEmpleat, name: nomEmpleat });
//   console.log({ nomEmpleat, salariEmpleat });
// };

// // funcioAsync(2);

// !Ex2
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï
la seva funció resolve() DESPRES de 2 segons de la seva invocació. */

const asyncf2 = () => {
  let promesa = new Promise((resolve, reject) => {
    console.log('Crida efectuada');
    console.log('Promesa pending');
    setTimeout(() => {
      resolve('Promesa resolta :)');
    }, 2000);
  });
  return promesa;
};

const asyncf1 = async () => {
  const result = await asyncf2();
  console.log(result);
};

// asyncf1();

// *##### Nivell 2 #####
// !Ex1
/* Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. */

// const retornaDoble = (num) => {
//   return new Promise((resolve, reject) => {
//     try {
//       setTimeout(() => {
//         console.log(2 * num);
//         resolve(2 * num);
//       }, 2000);
//     } catch (error) {
//       reject(console.log('Error, the parameter is not a number'));
//     }
//   });
// };

// retornaDoble(6);

/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir
la funció anterior. */

// const suma3 = async (num1, num2, num3) => {
//   // la funció retornaDoble() només accepta UN sol número per crida.
//   // retornaDoble() retorna una promesa, la resolució de la qual l'esperem mitjançant await.
//   const resultat =
//     (await retornaDoble(num1)) + (await retornaDoble(num2)) + (await retornaDoble(num3));
//   // await només té sentit si esperem una promise.
//   console.log(resultat);
//   return resultat;
// };

// suma3(1, 2, 3);

// *------------------------------------------------------------------------------------------
// *##### Nivell 3 #####
// !Ex1
/* Força i captura tants errors com puguis dels nivells 1 i 2. */
// !Nivell1 - Ex1

// Afegeixo blocs try & catch
const funcioAsync = async (idEmpleat) => {
  try {
    const { employeeName: nomEmpleat } = await getEmployee(idEmpleat);
    const { salary: salariEmpleat } = await getSalary({
      id: idEmpleat,
      name: nomEmpleat,
    });
    console.log({ nomEmpleat, salariEmpleat });
  } catch (error) {
    console.log(error);
  }
};
// Casos provats
// Introduir una string en comptes d'un id number.
// funcioAsync('a');

// Indroduir un id no trobable.
// funcioAsync(9);

// No passar cap paràmetre
// funcioAsync("");

// !Nivell2 - Ex1
/* Crea una funció que retorni el doble del número que li passa com a paràmetre després de 2 segons. */
/* Aquí he forçat errors a l'hora de cridar la funcio retornaDoble
No li he vist sentit fer servir try/catch en aquí ja que tinc la promesa que farà reject en cas de paràmetre no vàlid. */
// retornaDoble('a');
// retornaDoble();

/* Crea una altra funció que rebi tres números i calculi la suma dels seus dobles fent servir
la funció anterior. */

const suma3 = async (num1, num2, num3) => {
  /* Inicialment he introduït aquesta validació: */
  // if (isNaN(num1) || isNaN(num2) || isNaN(num3))
  // typeOf NaN de fet es number a javascript, per això crec que deixa passar casos com "a"
  //   throw new Error('Algún paràmetre no és un número');
  try {
    const resultat =
      (await retornaDoble(num1)) +
      (await retornaDoble(num2)) +
      (await retornaDoble(num3));
    console.log(`El resultat de ${num1} + ${num2} + ${num3} és ${resultat}`);
    return resultat;
  } catch (error) {
    console.log(error);
  }
};

// suma3(1, 'a', 3);
