class Persona {
  constructor(nom) {
    this.nom = nom;
  }
  //   mètodes
  dirNom() {
    console.log(`El nom és ${this.nom}`);
  }
}

// const home = new Persona('Alex');
// const dona = new Persona('Clara');
// home.dirNom();
// dona.dirNom();

module.exports = { Persona };
