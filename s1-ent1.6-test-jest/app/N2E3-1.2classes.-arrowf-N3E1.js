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
  //!Afegeixo validació del paràmetre name rebut
  if (!name || typeof name !== 'string')
    throw new Error('Error, parameter must be a String');
  // Objecte que contindrà les propietats que volem assignar al prototip.
  const objecte = {
    constructor: Person,
  };
  Person.prototype = objecte;
  /* Assigno la propietat prototype de Person al nou objecte creat, que incorpora la propietat 
  constructor que defineix quin ha de ser el "blueprint" per crear futures instàncies */
  const newIndividu = Object.create(Person.prototype);
  /* The Object.create() static method creates a new object, using an existing object as the 
  prototype of the newly created object. */
  newIndividu.nom = name;
  return newIndividu;
};
// Invoco la funcioCreateObjects amb diferents noms d'objecte
// console.log("------------")
const Alexander = funcioCreateObjects('Alexander');
// console.log(Alexander)
// Alexander.dirNom();
// console.log(Alexander.constructor);
// console.log(`Alexander is an instance of the abstract class Person --> ${Alexander instanceof Person} <--`);
// console.log("------------")

module.exports = {
  Person,
  funcioCreateObjects,
};
