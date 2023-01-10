// Funcions i template literals
// ##### Nivell-1 #####
// Ex1
/* Crea una funció que mostri per consola el nom d'usuari/ària en invocar-la passant-li el nom com a paràmetre. */
const funcio1 = (nom) => {
  console.log(nom);
};
funcio1('Alex');

// ##### Nivell-2 #####
// Ex1
// Mostra per consola el nom i cognoms de l'usuari/ària mitjançant template literals, guardant-los en variables i referenciant-les en la impressió del missatge.
const nom = 'Alex';
const cognom = 'Orpinell';
console.log(`Hola, em dic ${nom} ${cognom}`);

// Ex2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.
function invocame() {
  return '--hola--';
}
console.log(`Això és una template literal que invoca una funcio ${invocame()}`);

// ##### Nivell-3 #####
// Ex1
let matriuFunc = []

const count = () => {
  for (let i = 0; i<=9; i++){
        console.log(i)
      }
}

const emplena = (matriu, funcio) => {
  
    for(let a=0;a<=10;a++){
      matriu.push(funcio)
    }
    
    for(i in matriuFunc){
      matriuFunc[i]()
    }
  }

emplena(matriuFunc,count)

// Ex2
// Crea una funció anònima autoinvocable igualada a una variable que mostri per consola el nom de l'usuari/ària a rebut com a paràmetre.
let hola = (function (nom) {
  console.log(nom)
})("Alex")
