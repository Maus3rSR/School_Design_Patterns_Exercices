class ManetteXbox {
  A() {
    console.log("A");
  }
  B() {
    console.log("B");
  }
  X() {
    console.log("X");
  }
}

class ManettePS5 {
  X() {
    console.log("X");
  }
  O() {
    console.log("O");
  }
  Triangle() {
    console.log("Triangle");
  }
}

class Clavier {
  Espace() {
    console.log("Espace");
  }
  ClicG() {
    console.log("ClicG");
  }
  ClicD() {
    console.log("ClicD");
  }
}

interface ControllerActions {
  sauter();
  attaquer();
  interargir();
}

class ManetteXboxAdapter implements ControllerActions {
  constructor(private manette: ManetteXbox) {}

  sauter() {
    this.manette.A();
  }

  attaquer() {
    this.manette.B();
  }

  interargir() {
    this.manette.X();
  }
}

class ManettePS5Adapter implements ControllerActions {
  constructor(private manette: ManettePS5) {}

  sauter() {
    this.manette.X();
  }

  attaquer() {
    this.manette.O();
  }

  interargir() {
    this.manette.Triangle();
  }
}

class ClavierAdapter implements ControllerActions {
  constructor(private clavier: Clavier) {}

  sauter() {
    this.clavier.Espace();
  }

  attaquer() {
    this.clavier.ClicG();
  }

  interargir() {
    this.clavier.ClicD();
  }
}

// Cette classe permettra au bot de jouer et délègue les actions au controller
class Bot implements ControllerActions {
  constructor(private controller: ControllerActions) {}

  sauter() {
    console.log(
      "Bot saute avec le controller",
      this.controller.constructor.name
    );
    this.controller.sauter();
  }

  attaquer() {
    console.log(
      "Bot attaque avec le controller",
      this.controller.constructor.name
    );
    this.controller.attaquer();
  }

  interargir() {
    console.log(
      "Bot interargit avec le controller",
      this.controller.constructor.name
    );
    this.controller.interargir();
  }
}

// Code client
function main() {
  const manetteXbox = new ManetteXbox();
  const manettePS5 = new ManettePS5();
  const clavier = new Clavier();

  const manetteXboxAdapter = new ManetteXboxAdapter(manetteXbox);
  const manettePS5Adapter = new ManettePS5Adapter(manettePS5);
  const clavierAdapter = new ClavierAdapter(clavier);

  const bot = new Bot(manetteXboxAdapter);
  const bot2 = new Bot(manettePS5Adapter);
  const bot3 = new Bot(clavierAdapter);

  bot.sauter();
  bot.attaquer();
  bot.interargir();

  bot2.sauter();
  bot2.attaquer();
  bot2.interargir();

  bot3.sauter();
  bot3.attaquer();
  bot3.interargir();
}

main();
