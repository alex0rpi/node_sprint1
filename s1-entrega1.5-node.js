// *##### Nivell 1 #####
// !Ex1---------------------------------------------------------------
/* Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
// const fs = require('fs');
// const creaFitxer = (nomFitxer, text) => {
//   fs.writeFile(`./fitxers_creats/${nomFitxer}`, text, () => console.log('Fitxer creat'));
// };
// creaFitxer('fitxer1.txt', 'El Mies es pensa que no sobreviurà l'hivern');
/*Es crea un fitxer .txt a la mateixa arrel del repositori.*/

// !Ex2---------------------------------------------------------------
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

// const fs = require('fs');

// const mostraContingutFitxer = (fileName) => {
//   fs.readFile(`./fitxers_creats/${fileName}`, 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   });
// };
/* O BE */
// const mostraContingutFitxer = (fileName) => {
//   fs.readFile(`./fitxers_creats/${fileName}, (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });
// };
// mostraContingutFitxer('fitxer1.txt');

// !Ex3---------------------------------------------------------------
/*Crea una funció que comprimeixi el fitxer del nivell 1.*/
// **Llibreria de node: zlib**
/* https://nodejs.org/api/zlib.html*/
const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream');
const gzip = zlib.createGzip();
const source = fs.createReadStream('./fitxers_creats/fitxer1.txt');
const destination = fs.createWriteStream('./fitxers_creats/fitxer1.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred', err);
    process.exitCode = 1;
    // Ends the process with the specified code. If omitted, exit with a 'success' code 0.
    // To exit with a 'failure' code, specify 1
  }
  console.log('Compressed file was created.');
});

/* ALTERNATIVA: encadenar pipes.↓↓*/
// source.pipe(gzip).pipe(destination)
/* hi ha vàries maneres més d'aconseguir-ho {promisify}*/

// *##### Nivell 2 #####
// !Ex1---------------------------------------------------------------
/*Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/
// const { setInterval } = require('timers');
// const frecursiva = () => {
//   console.log('Imprimeixo missatge cada 1s');
//   setInterval(() => {
//     frecursiva();
//   }, 1000);
// };
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

// Amb node child processes ↓↓
/* spawn(), fork(), exec(), execFile() --> methods to create a child process in Node.*/
/*child_process.exec(): spawns a shell and runs a command within that shell, passing 
the stdout and stderr to a callback function when complete.*/
const child_process = require('node:child_process');
const { stdout, stderr } = require('process');

// child_process.exec('dir directori_prova', (error, stdout, stderr) => {
/*Amb el directori d'usuari windows/users/formacio*/
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
const { Buffer } = require('node:buffer');
const fitxerInicial = 'fitxer1.txt';

/*Creo una promesa perquè fs llegeix de manera async, i a createCodedFiles espero a què la retorni.*/
const readFileContent = (fileName) => {
  let promesa = new Promise((resolve, reject) => {
    fs.readFile(`./fitxers_creats/${fileName}`, (err, data) => {
      if (err) {
        reject('There was an error');
        throw err;
      }
      resolve(data);
    });
  });
  return promesa;
};

const createCodedFiles = async (file) => {
  /* Obtenir contingut del file */
  const fileContent = (await readFileContent(file)).toString();
  console.log(fileContent)
  const buf = Buffer.from(fileContent, 'utf-8');
  const hexContent = buf.toString('hex');
  const base64Content = buf.toString('base64');
  creaFitxer('fitxerHex.txt', hexContent);
  creaFitxer('fitxerBase64.txt', base64Content);
};

createCodedFiles(fitxerInicial);

//!---------------------------------------------------------------

/*Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme 
  aes-192-cbc, i esborri els fitxers inicials.*/

const path = require('path');
const crypto = require('crypto');

const esborraFitxer = (fname) => {
  const fPath = path.join(__dirname, `/fitxers_creats/${fname}`);
  fs.unlink(fPath, () => console.log('One file was deleted.'));
};

const encriptaAESiEsborra = async (f1, f2) => {
  const algorithm = 'aes-192-cbc';
  const password = 'bondia';

  /*Aquest algoritme requereix d'una key de 24bytes (192 bits)*/
  crypto.scrypt(password, 'salt', 24, (err, key) => {
    /*Generate key*/
    if (err) throw err;
    console.log(key.toString('hex')); // '3745e48...08d59ae'
    /*Generate IV*/
    crypto.randomFill(new Uint8Array(16), (err, iv) => {
      if (err) throw err;
      const cipher = crypto.createCipheriv(algorithm, key, iv);
      let encrypted = '';
      cipher.setEncoding('hex');
      cipher.on('data', (chunk) => (encrypted += chunk));
      cipher.on('end', () => console.log(encrypted))
    });
  });

  // const contentF1 = await readFileContent(f1);
  // const contentF2 = await readFileContent(f2);
  // console.log(contentF1.toString());
  // console.log(contentF2.toString());

  // esborraFitxer(f1);
  // esborraFitxer(f2);
};

encriptaAESiEsborra('fitxerBase64.txt', 'fitxerHex.txt');

//!---------------------------------------------------------------

/*Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.*/

//!---------------------------------------------------------------
