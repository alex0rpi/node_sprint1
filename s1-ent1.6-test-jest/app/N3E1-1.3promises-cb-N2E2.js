/* Modifico les dues funcions per a què llegeixin el fitxer json i assignin
els employees o salaries a una variable */

const fs = require('fs');

const getEmployee = (id) => {
  const json = fs.readFileSync('./N3E1-dades.json');
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
  const json = fs.readFileSync('./N3E1-dades.json');
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
