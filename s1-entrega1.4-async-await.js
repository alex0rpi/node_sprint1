// *##### Nivell 1 #####
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
  let found = false; //m'agradaria no necessitar aquesta variable
  let promesa = new Promise((resolve, reject) => {
    for (let i in employees) {
      if (employees[i].id === id) {
        found = true;
        resolve({ message: 'Employee trobat', employeeName: employees[i].name });
      }
    }
    if (!found) {
      reject({ message: 'Employee not found' });
    }
  });
  return promesa;
};

const getSalary = (objEmployee) => {
  let trobat = false; //m'agradaria no necessitar aquesta variable
  let laPromesa = new Promise((resolve, reject) => {
    for (let i in salaries) {
      if (salaries[i].id === objEmployee.id) {
        trobat = true;
        resolve({
          message: 'Salary trobat',
          empName: objEmployee.name,
          salary: salaries[i].salary,
        });
      }
    }
    if (!trobat) {
      reject({ message: 'Salary not found' });
    }
  });
  return laPromesa;
};

// const funcioAsync = async (idEmpleat) => {
//   const { employeeName: nomEmpleat } = await getEmployee(idEmpleat);
//   const { salary: salariEmpleat } = await getSalary({ id: idEmpleat, name: nomEmpleat });
//   console.log({ nomEmpleat, salariEmpleat });
// };

// funcioAsync(2);

// Ex2
/* Crea una nova funció asíncrona que cridi a una altra que retorni una Promise que efectuï
 la seva funció resolve() DESPRES de 2 segons de la seva invocació. */

const asyncf2 = async () => {
  let promesa = new Promise((resolve, reject) => {
    setInterval(() => {
      resolve({ message: 'Han passat 2s i la promesa executa resolve()' });
      return promesa;
    }, 2000);
  });
};

(async function asyncf1() {
  const result = await asyncf2();
  console.log(result.message);
})()
