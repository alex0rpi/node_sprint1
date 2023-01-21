//* NIVELL 2
/*PUNT-1. Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant 
Jest Fake Timers. */
// const retornaDoble = require('../app/N2E1-1.4async-await-N2E1');

// describe('async-await-N1E2 retornaDoble', () => {
//   jest.useFakeTimers();
//   jest.spyOn(global, 'setTimeout');
//   test('retornaDoble throws error if one param is NaN', () => {
//     expect(() => retornaDoble(null)).toThrow('please provide a number');
//     expect(() => retornaDoble('a')).toThrow('please provide a number');
//   });
//   test('Should return a fn after 2 seconds of the second call.', () => {
//     newFunction().then((result) => {
//       expect(result).toBe('resolved after 2 seconds');
//     });
//   });

//   test('waits 2 second after passed the number twice', () => {
//     const number = retornaDoble(5);
//     jest.runAllTimers();
//     expect(number).toBe(10);
//   });
// });