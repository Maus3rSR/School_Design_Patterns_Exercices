function creerPersonnageComplet(
  nom: string,
  classe: string,
  race: string,
  niveau: number,
  force: number,
  agilite: number,
  intelligence: number,
  arme?: string,
  armure?: string,
  competences?: string[],
  inventaire?: string[]
) {
  return {
    nom,
    classe,
    race,
    niveau,
    statistiques: {
      force,
      agilite,
      intelligence,
    },
    equipement: {
      arme: arme || "Aucune",
      armure: armure || "Aucune",
    },
    competences: competences || [],
    inventaire: inventaire || [],
  };
}

const guerrier = creerPersonnageComplet(
  "Thorin",
  "Guerrier",
  "Nain",
  10,
  18,
  12,
  8,
  "Épée longue",
  "Armure de plates",
  ["Coup puissant", "Rage"],
  ["Potion de soin", "Pain"]
);

const magicien = creerPersonnageComplet(
  "Gandalf",
  "Magicien",
  "Humain",
  15,
  8,
  10,
  20,
  "Bâton magique",
  "Robe enchantée",
  ["Boule de feu", "Téléportation", "Bouclier magique"],
  ["Grimoire", "Potion de mana"]
);

const voleur = creerPersonnageComplet(
  "Bilbo",
  "Voleur",
  "Hobbit",
  5,
  10,
  18,
  12,
  "Dague",
  undefined,
  ["Furtivité", "Crochetage"],
  undefined
);

console.log(guerrier);
console.log(magicien);
console.log(voleur);
