function creerPersonnage(type: string) {
  if (type === "Guerrier") {
    return {
      nom: "Guerrier",
      attaquer: () => console.log("Attaque avec une épée !"),
    };
  } else if (type === "Magicien") {
    return {
      nom: "Magicien",
      attaquer: () => console.log("Lance un sort de feu !"),
    };
  } else if (type === "Archer") {
    return {
      nom: "Archer",
      attaquer: () => console.log("Tire une flèche !"),
    };
  } else {
    throw new Error("Type de personnage inconnu");
  }
}

const guerrier = creerPersonnage("Guerrier");
const magicien = creerPersonnage("Magicien");
const archer = creerPersonnage("Archer");

guerrier.attaquer();
magicien.attaquer();
archer.attaquer();
