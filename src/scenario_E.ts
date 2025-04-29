interface Character {
  attaquer(): void;
}

class Guerrier implements Character {
  attaquer(): void {
    console.log("Hache dans ta face");
  }
}

class Magicien implements Character {
  attaquer(): void {
    console.log("Boule de feu");
  }
}

class Archer implements Character {
  attaquer(): void {
    console.log("Flèche dans le genou");
  }
}

class CharacterFactory {
  // static pas obligatoire, mais nous restons pragmatique tant l'exemple est simple ici
  static createCharacter(type: string): Character {
    switch (type) {
      case "guerrier":
        return new Guerrier();
      case "magicien":
        return new Magicien();
      case "archer":
        return new Archer();
      default:
        throw new Error("Character type not found");
    }
  }
}

function main() {
  const guerrier = CharacterFactory.createCharacter("guerrier");
  const magicien = CharacterFactory.createCharacter("magicien");
  const archer = CharacterFactory.createCharacter("archer");

  guerrier.attaquer();
  magicien.attaquer();
  archer.attaquer();
}

main();
