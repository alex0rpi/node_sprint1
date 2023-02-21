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
    if (this.constructor === Person)
      throw new Error('Abstract class no pot ser instanciada mitjançant "new"');
    this.nom = nom;
  }
  dirNom() {
    console.log(`El meu nom és ${this.nom}`);
  }
}

/* Solució mitjançant prototips */
const funcioCreateObjects = (name) => {
  /* Assigno la propietat prototype de Person al nou objecte creat, que incorpora la propietat 
  constructor que defineix quin ha de ser el "blueprint" per crear futures instàncies */
  const newIndividu = Object.create(Person.prototype);
  /* The Object.create() static method creates a new object, using an existing object as the 
  prototype of the newly created object. */
  newIndividu.nom = name;
  return newIndividu;
};
// Invoco la funcioCreateObjects amb diferents noms d'objecte
console.log("------------")
const Alexander = funcioCreateObjects('Alexander');
Alexander.dirNom();
console.log(Alexander.constructor);
console.log(`Alexander is an instance of the abstract class Person --> ${Alexander instanceof Person} <--`);
console.log("------------")
const Mies = funcioCreateObjects('Mies');
Mies.dirNom();
console.log(Mies.constructor);
console.log(`Mies is an instance of the abstract class Person --> ${Mies instanceof Person} <--`);
console.log("------------")


/* A suggerència de l'Oriol, vaig crear una sub class però això no és pas la solució.
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
novaPersona.dirNom(); //donaria error perquè no s'ha pogut instanciar novaPersona
*/
