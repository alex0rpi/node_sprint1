// *##### Nivell 1 #####
// !Ex1
/* Crea una funció que, en executar-la, escrigui una frase en un fitxer. */
const fs = require('fs');
const { pipeline } = require('stream');
// const path = require('path')
// fs.writeFile('./fitxer1.txt', 'Bon dia, avui he perdut el tramvia.', () => console.log('Fitxer creat'));
// --> Es crea un fitxer .txt a la mateixa arrel del repositori.

// !Ex2
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
        
// !Ex3
/*Crea una funció que comprimeixi el fitxer del nivell 1.*/
// **Llibreria de node: zlib**
// https://nodejs.org/api/zlib.html
const zlib = require('zlib')
console.log(zlib)
const gzip = zlib.createGzip()

const source = fs.createReadStream('fitxer1.txt')
const destination = fs.createWriteStream('fitxer1.txt.gz')

pipeline(source, gzip, destination, (err) => {
    if(err){
        console.error('An error occurred', err)
        process.exitCode = 1
    }
})
// Veig que funciona però hi ha vàries maneres més d'aconseguir-ho
