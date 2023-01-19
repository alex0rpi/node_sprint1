// ##### Nivell 1 #####
// Ex1
/*Mostra per la consola el resultat d'una arrow function autoinvocable que
 sumi dos nombres*/

console.log(
  (() => {
    return 1 + 2;
  })()
);

// ##### Nivell 2 #####
// Ex1
/* Crea una arrow function que, rebent un paràmetre, retorni un objecte
amb un atribut que tingui com a valor el paràmetre rebut. */

const funcio = (param) => {
  return {
    atribut: param,
  };
};

console.log(funcio('Alex'));

// Ex2
/* Crea una classe "Persona" que rebi un paràmetre 'nom' en ser instanciada.
La classe inclourà un mètode dirNom que imprimeixi per consola el paràmetre 'nom'.
Invoca el mètode dirNom des de fora de la classe. */
class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  //   mètodes
  dirNom() {
    console.log(`El nom és ${this.nom}`);
  }
}

const home = new Persona('Alex');
const dona = new Persona('Clara');
home.dirNom();
dona.dirNom();

// ##### Nivell 3 #####
// Ex1
/* Escriu una function creadora d'objectes que faci instàncies d'una classe abstracta.
Invoca-la (la funció) amb diferents definicions. */

class Person {
  constructor(nom) {
    // Evitar que la classe pugui ser instanciada
    if (this.constructor === Person) {
      throw new Error('Abstract class no pot ser instanciada.');
    }
    this.nom = nom;
  }
  //   mètodes
  dirNom() {
    console.log(`El nom és ${this.nom}`);
  }
}
/* Creació d'una subclass a suggerència de l'Oriol */
/* TODO: M'he de mirar la solució mitjançant prototips */
class nen extends Person {
  constructor(nom) {
    super();
    this.nom = nom;
  }
}

const funcioCrearObjectes = (nomObjecte) => {
  const objecteNou = new nen(nomObjecte);
  return objecteNou;
};

let nouObjecte = funcioCrearObjectes('Mies');
nouObjecte.dirNom();

let novaPersona = new Person('Pepito');
