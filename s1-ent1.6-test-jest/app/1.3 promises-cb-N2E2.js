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
  if (isNaN(id)) throw new Error('Invalid id input, id number expected');
  let promesa = new Promise((resolve, reject) => {
    for (let i in employees) {
      if (employees[i].id === id) {
        resolve({ employeeName: employees[i].name });
      }
    }
    reject({ message: 'Employee not found' });
  });
  return promesa;
};

// getEmployee(1)
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

const getSalary = (objEmployee) => {
  if (typeof objEmployee !== 'object') throw new Error('input must be of object type');
  /* Si reb una Array, superaria l'if anterior, però almenys filtra la resta de types */
  let laPromesa = new Promise((resolve, reject) => {
    for (let i in salaries) {
      if (salaries[i].id === objEmployee.id) {
        resolve({
          salary: salaries[i].salary,
        });
      }
    }
    reject({ message: 'Salary not found' });
  });
  return laPromesa;
};

// getSalary({ id: 1, name: 'Linux Torvalds' })
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

module.exports = {
  getEmployee,
  getSalary,
};
