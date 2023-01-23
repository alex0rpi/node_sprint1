//* NIVELL 3
/*PUNT-1. Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 
(getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. 
Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.*/

const { getEmployee, getSalary } = require('../app/N3E1-1.3promises-cb-N2E2');

describe('getEmployee-getSalary', () => {
  test('getEmployee returns an employee object{id:, name:}', () => {
    const spy = jest.spyOn(fs, 'readFileSync').mockImplementation();
    jest.mock(
      'data.json',
      () => ({
        settings: 'someSetting',
      }),
      { virtual: true }
    );
    return getEmployee(1).then((employee) =>
      expect(employee).toEqual({ id: 1, name: 'Linux Torvalds' })
    );
  });
});

/*PUNT-2. Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de 
funcionament i verifiqui que els errors llançats són els esperats.*/
