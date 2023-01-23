/* Modifico les dues funcions per tal què:
--> llegeixin el fitxer json i assignin la data a una variable.
--> validin l'argument rebut
*/

const fs = require('fs');

const getEmployee = (id) => {
  if (!id || typeof id !== 'number') throw new Error('Argument must be of type number');
  // Accés a dades del fitxer .json
  const json = fs.readFileSync('./data.json');
  const employees = JSON.parse(json).employees;
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

getEmployee(2)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

const getSalary = (objEmployee) => {
  // Accés a dades del fitxer .json
  const json = fs.readFileSync('./data.json');
  const salaries = JSON.parse(json).salaries;
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

getSalary({ id: 3, name: 'Jeff Bezos' })
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
