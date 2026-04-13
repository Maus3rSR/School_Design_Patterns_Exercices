function gererActionClavier(action: string) {
  if (action === "espace") {
    console.log("Sauter");
  } else if (action === "clicGauche") {
    console.log("Attaquer");
  } else if (action === "clicDroit") {
    console.log("Interagir");
  }
}

function gererActionXbox(action: string) {
  if (action === "A") {
    console.log("Sauter");
  } else if (action === "B") {
    console.log("Interagir");
  } else if (action === "X") {
    console.log("Attaquer");
  }
}

function gererActionPS5(action: string) {
  if (action === "X") {
    console.log("Sauter");
  } else if (action === "O") {
    console.log("Interagir");
  } else if (action === "Triangle") {
    console.log("Attaquer");
  }
}

const typeControleur: string = "Xbox";

if (typeControleur === "Clavier") {
  gererActionClavier("espace");
  gererActionClavier("clicGauche");
} else if (typeControleur === "Xbox") {
  gererActionXbox("A");
  gererActionXbox("X");
} else if (typeControleur === "PS5") {
  gererActionPS5("X");
  gererActionPS5("Triangle");
}
