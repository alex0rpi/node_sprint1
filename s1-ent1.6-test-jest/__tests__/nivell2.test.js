//* NIVELL 2
/*PUNT-1. Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant 
Jest Fake Timers. */
const { retornaDoble } = require('../app/N2E1-1.4async-await-N2E1');

describe('N1E2 retornaDoble', () => {
  jest.useFakeTimers();
  jest.spyOn(global, 'setTimeout');
  test('retornaDoble returns a rejected promise if no param is passed', () => {
    expect.assertions(1);
    return retornaDoble().catch((e) =>
      expect(e).toMatch(
        'REJECTED: Error, parameter(s) either missing or not of type number'
      )
    );
  });
  test('retornaDoble returns a rejected promise if param passed is !typeof number', () => {
    expect.assertions(1);
    return retornaDoble('a').catch((e) =>
      expect(e).toMatch(
        'REJECTED: Error, parameter(s) either missing or not of type number'
      )
    );
  });
  test('calls its timer once after being invoked', () => {
    retornaDoble(2);
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });

  test('retornaDoble return a result after 2 seconds given a number parameter', async () => {
    expect.assertions(1);
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
    await expect(retornaDoble(3)).resolves.toBe(6);
  });
});

/*PUNT-2 Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. 
dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen. */

const { Persona } = require('../app/N2E2-1.2classes-arrowf-N2E2');

jest.mock('../app/N2E2-1.2classes-arrowf-N2E2');

describe('class Persona', () => {
  //   beforeAll(() => Persona.mockClear());
  test('Check that constructor of Class Persona is called', () => {
    Persona.mockClear();
    const noi = new Persona('Mies');
    expect(Persona).toHaveBeenCalledTimes(1);
  });
  test('Check that the method within the Class can be invoked after an instantiation', () => {
    Persona.mockClear();
    // Show that mockClear() is working:
    expect(Persona).not.toHaveBeenCalled();

    const noia = new Persona('Misheta');
    expect(Persona).toHaveBeenCalledTimes(1);
    noia.dirNom();
    const mockPersonaInstance = Persona.mock.instances[0];
    // console.log(Persona.mock.instances);
    const mockDirNom = mockPersonaInstance.dirNom;
    expect(mockDirNom).toHaveBeenCalledTimes(1);
  });
});

/*PUNT-3 Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici 
Classes & Arrow Functions N3 E1. */

const { Person, funcioCreateObjects } = require('../app/N2E3-1.2classes.-arrowf-N3E1');

describe('classe abstracta', () => {
  test('funcioCrearObjectes throws an error if no string param is passed', () => {
    expect(() => funcioCreateObjects(4).toThrow('Error, parameter must be a String'));
  });
  test('Check that funcioCrearObjectes returns an instance of class Person', () => {
    const Alex = funcioCreateObjects('Alex');
    expect(Alex instanceof Person).toBe(true);
  });
});
