// !Moduls utilitzats en aquesta entrega:
const fs = require('fs');
const child_process = require('node:child_process');
const { stdout, stderr } = require('process');
const { Buffer } = require('node:buffer');
const { createCipheriv, randomBytes } = require('node:crypto');

// Per començar en ordre, esborrar tots els fitxers del directori "fitxers_creats"

// *##### Nivell 1 #####
// !Ex1---------------------------------------------------------------
/* Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
const creaFitxer = (nomFitxer, text) => {
  fs.writeFile(`./fitxers_creats/${nomFitxer}`, text, () => console.log('Fitxer creat'));
};
/* Aquesta funció ⬆ es reutilitza en els punts primer i tercer del nivell 3 */
// creaFitxer('fitxer1.txt', "El Mies es pensa que no sobreviurà a l'hivern");

// !Ex2---------------------------------------------------------------
/*Crea una altra funció que mostri per consola el contingut del fitxer de l'exercici anterior.*/

// const mostraContingutFitxer = (fileName) => {
//   fs.readFile(`./fitxers_creats/${fileName}`, 'utf8', (err, data) => {
//     /* A diferència de fs.createReadStream (que transfereix petits chunks), fs.readfile agafa la totalitat del contingut del fitxer i espera a què sigui emmagatzemat en memòria aband d'executar el callback. */
//     if (err) throw err;
//     console.log(data);
//   });
// };
// /* ⬆ O BE ⬇*/
// const mostraContingutFitxer = (fileName) => {
//   fs.readFile(`./fitxers_creats/${fileName}`, (err, data) => {
//     if (err) throw err;
//     console.log(data.toString());
//   });
// };
/* Cridar la funció aquí ⬇ */
// mostraContingutFitxer('fitxer1.txt');

// !Ex3---------------------------------------------------------------
/*Crea una funció que comprimeixi el fitxer del nivell 1.*/
// **Llibreria de node: zlib**
/* https://nodejs.org/api/zlib.html*/

const zlib = require('zlib');
const { pipeline } = require('stream');
const comprimeix = (fileToZip) => {
  /* Crear compressor */
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(`./fitxers_creats/${fileToZip}`);
  const destination = fs.createWriteStream('./fitxers_creats/fitxer1.txt.gz');
  /*streams transfer data in small chunks at a time to a location (variable)*/

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error('An error occurred', err);
      process.exitCode = 1;
      /* Ends the process with the specified code. If omitted, exit with a 'success' code 0.*/
      /* To exit with a 'failure' code, specify 1*/
    }
    console.log('Compressed file was created.');
  });
  /* O BE: encadenar pipes.↓↓*/
  // source.pipe(gzip).pipe(destination)
};
/* Cridar la funció aquí ⬇ */
// comprimeix('fitxer1.txt');

// *##### Nivell 2 #####
// !Ex1---------------------------------------------------------------
/*Crea una funció que imprimeixi recursivament un missatge per la consola amb demores d'un segon.*/
const { setTimeout } = require('timers');
const frecursiva = () => {
  console.log('Imprimeixo missatge cada 1s');
  setTimeout(() => {
    frecursiva();
  }, 1000);
};
/* Cridar la funció aquí ⬇ */
// frecursiva();

// !Ex2---------------------------------------------------------------
/*Crea una funció que llisti per la consola el contingut del directori d'usuari/ària de 
l'ordinador utilizant Node Child Processes.*/
const directory = 'C:/Users/'; // <-- suposant que ens referim a aquest directori

/* Sense child processes ho hauria fet així:⬇ */
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
// child_process.exec('dir C:\\Users', function (error, stdout, stderr) {
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
// **Llibreria de node: buffer**
const fitxerInicial = 'fitxer1.txt';
// /*Creo una promesa perquè fs llegeix de manera async, i a la funció de més abaix createCodedFiles
//  espero a què retorni l'estat d'aquesta promesa.*/
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
  console.log(fileContent);
  const buf = Buffer.from(fileContent, 'utf-8');
  const hexContent = buf.toString('hex');
  const base64Content = buf.toString('base64');
  /*Utilitzar funció de l'apartat 1 nivell 1 */
  creaFitxer('fitxerHex.txt', hexContent);
  creaFitxer('fitxerBase64.txt', base64Content);
};
/* Cridar la funció aquí ⬇ */
// createCodedFiles(fitxerInicial);
//!---------------------------------------------------------------

/*Crea una funció que guardi els fitxers del punt anterior, ara encriptats amb l'algoritme 
  aes-192-cbc, i esborri els fitxers inicials.*/

const esborraFitxer = (fname) => {
  const fPath = __dirname + `/fitxers_creats/${fname}`;
  fs.unlink(fPath, () => console.log('One file was deleted.'));
};

const creaFitxerEncriptat = (nomFitxer, text) => {
  fs.writeFile(`./fitxers_creats/${nomFitxer}`, text, () =>
    console.log('Encrypted file created')
  );
};
/* Defineixo una key i un iv que faré servir per a encriptar i més endavant per a descencriptar */
let key = '123456789123456789123456'; // initialisation vector
let iv = '1234567891234567'; // initialisation vector

// **Llibreria de node: crypto**

const encriptaAESiEsborra = async (f) => {
  const algorithm = 'aes-192-cbc';
  /*Aquest algoritme requereix d'una key de 24bytes*/

  const contentF = (await readFileContent(f)).toString();

  /*We create an encriptor to be used for this funcion call*/
  let cipher = createCipheriv(algorithm, key, iv);

  /*Then, use the encryptor to encript the file content*/
  let encryptedF = cipher.update(contentF);

  encryptedF = Buffer.concat([encryptedF, cipher.final()]);

  const FitxerEncriptat = creaFitxerEncriptat(
    `${f}-Encrypt.txt`,
    encryptedF.toString('hex')
  );
  /*El contingut encriptat el passem a format 'hex'*/
  /*Esborrar fitxer inicial rebut com a argument (f).*/
  esborraFitxer(f);

  return FitxerEncriptat;
};

/* Cridar la funció per als dos fitxers codificats aquí ⬇ */
// encriptaAESiEsborra('fitxerHex.txt');
// encriptaAESiEsborra('fitxerBase64.txt');
//!---------------------------------------------------------------

/*Crea una altra funció que desencripti i descodifiqui els fitxers de l'apartat anterior 
tornant a generar una còpia de l'inicial.*/

const { createDecipheriv } = require('node:crypto');

const decryptDecode = async (fitxerEncriptat, encoding) => {
  const content = (await readFileContent(fitxerEncriptat)).toString();
  const algorithm = 'aes-192-cbc';
  let decipher = createDecipheriv(algorithm, key, iv);

  let contentDesencriptat = decipher.update(content, 'hex', 'utf-8');
  contentDesencriptat += decipher.final();

  /* We create a buffer based on the encoding of the decrypted file */
  const buff = Buffer.from(contentDesencriptat, encoding);

  contingutDescodif = buff.toString('utf-8');

  /*Utilitzar funció de l'apartat 1 nivell 1 */
  creaFitxer(`${fitxerEncriptat}-DESENC.txt`, contingutDescodif);
};
/* Cridar la funció per als dos fitxers encriptats aquí ⬇ */
// decryptDecode('fitxerHex.txt-Encrypt.txt', 'hex');
// decryptDecode('fitxerBase64.txt-Encrypt.txt', 'base64');
//!---------------------------------------------------------------