// *##### Nivell 1 #####
// !Ex1---------------------------------------------------------------
/* Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
// const fs = require('fs');
// const { setInterval } = require('timers');
// const path = require('path')
// fs.writeFile('./fitxer1.txt', 'Bon dia, avui he perdut el tramvia.', () => console.log('Fitxer creat'));
// --> Es crea un fitxer .txt a la mateixa arrel del repositori.

// !Ex2---------------------------------------------------------------
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

// fs.readFile('./fitxer1.txt','utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// OR

// fs.readFile('./fitxer1.txt', (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });

// !Ex3---------------------------------------------------------------
/*Crea una funció que comprimeixi el fitxer del nivell 1.*/
// **Llibreria de node: zlib**
// https://nodejs.org/api/zlib.html
// const zlib = require('zlib');
// const { pipeline } = require('stream');
// const gzip = zlib.createGzip();
// const source = fs.createReadStream('fitxer1.txt');
// const destination = fs.createWriteStream('fitxer1.txt.gz');

// Utilizar una de les dues alternatives següents
// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.error('An error occurred', err);
//     process.exitCode = 1;
//     // Ends the process with the specified code. If omitted, exit with a 'success' code 0.
//     // To exit with a 'failure' code, specify 1
//   }
//   console.log('Compressed file was created.');
// });
// Alternativa més compacta que també funciona: encadenar pipes.
// source.pipe(gzip).pipe(destination)
// hi ha vàries maneres més d'aconseguir-ho {promisify}

// *##### Nivell 2 #####
// !Ex1---------------------------------------------------------------
/*Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/
const frecursiva = () => {
  console.log('Imprimeixo missatge cada 1s');
  setInterval(() => {
    frecursiva();
  }, 1000);
};
// frecursiva()

// !Ex2---------------------------------------------------------------
/*Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de 
l'ordinador utilizant Node Child Processes.*/

// const directory = 'C:/Users/formacio';
// const fs = require('fs');
// Sense node child processes seria ↓↓
// fs.readdir(directory, (err, files) => {
//   files.forEach((file) => {
//     console.log(file);
//   });
//   if (err) console.log(err);
// });

// Amb node child processes
// spawn(), fork(), exec(), execFile() --> methods to create a child process in Node.
/*child_process.exec(): spawns a shell and runs a command within that shell, passing 
the stdout and stderr to a callback function when complete.*/
// const child_process = require('node:child_process');
// const { stdout, stderr } = require('process');

// child_process.exec('dir directori_prova', (error, stdout, stderr) => {
// Amb el directori d'usuari windows/users/formacio
// child_process.exec('dir C:\\Users\\formacio', function (error, stdout, stderr) {
//   if (error) {
//     console.log(`exec error: ${error}`);
//     return;
//   }
//   console.log(`stdour: ${stdout}`);
//   console.error(`stderr: ${stderr}`);
// });

// *##### Nivell 3 ##### !Ex1
/*Crea una funció que creï dos fitxers codificats en hexadecimal i en base64 respectivament, 
a partir del fitxer del nivell 1.*/
const fs = require('fs');
const path = require('path');
const { Buffer } = require('node:buffer');

const buf = Buffer.from('fitxer1.txt', 'utf-8');

console.log(buf.toString('hex'));
console.log(buf.toString('base64'));

//!---------------------------------------------------------------

/*Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme 
aes-192-cbc, i esborri els fitxers inicials.*/

//!---------------------------------------------------------------

/*Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.*/

//!---------------------------------------------------------------
