let etatPersonnage = "idle";

function attaquer() {
  if (etatPersonnage === "idle") {
    console.log("Attaque depuis idle");
    etatPersonnage = "attaque";
  } else if (etatPersonnage === "attaque") {
    console.log("Attaque en combo");
    etatPersonnage = "attaque";
  } else if (etatPersonnage === "deplacement") {
    console.log("Attaque en mouvement");
    etatPersonnage = "attaque";
  } else if (etatPersonnage === "saut") {
    console.log("Attaque aérienne");
    etatPersonnage = "attaque";
  } else if (etatPersonnage === "etourdi") {
    console.log("Impossible d'attaquer, personnage étourdi");
  }
}

function deplacer() {
  if (etatPersonnage === "idle") {
    console.log("Commence à se déplacer");
    etatPersonnage = "deplacement";
  } else if (etatPersonnage === "attaque") {
    console.log("Impossible de se déplacer pendant l'attaque");
  } else if (etatPersonnage === "deplacement") {
    console.log("Continue de se déplacer");
  } else if (etatPersonnage === "saut") {
    console.log("Impossible de se déplacer en l'air");
  } else if (etatPersonnage === "etourdi") {
    console.log("Impossible de se déplacer, personnage étourdi");
  }
}

function sauter() {
  if (etatPersonnage === "idle") {
    console.log("Saute depuis le sol");
    etatPersonnage = "saut";
  } else if (etatPersonnage === "attaque") {
    console.log("Impossible de sauter pendant l'attaque");
  } else if (etatPersonnage === "deplacement") {
    console.log("Saute en mouvement");
    etatPersonnage = "saut";
  } else if (etatPersonnage === "saut") {
    console.log("Déjà en l'air");
  } else if (etatPersonnage === "etourdi") {
    console.log("Impossible de sauter, personnage étourdi");
  }
}

function idle() {
  etatPersonnage = "idle";
  console.log("Retour à l'état idle");
}

attaquer();
idle();
deplacer();
sauter();
attaquer();
