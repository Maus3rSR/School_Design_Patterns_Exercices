let televisionAllumee = false;
let applicationActuelle = "";
let historique: string[] = [];

function allumer() {
  televisionAllumee = true;
  console.log("Télévision allumée");
}

function eteindre() {
  televisionAllumee = false;
  console.log("Télévision éteinte");
}

function lancerNetflix() {
  if (!televisionAllumee) {
    console.log("Télévision éteinte");
    return;
  }
  historique.push(applicationActuelle);
  applicationActuelle = "Netflix";
  console.log("Lancement de Netflix");
}

function lancerAmazonPrime() {
  if (!televisionAllumee) {
    console.log("Télévision éteinte");
    return;
  }
  historique.push(applicationActuelle);
  applicationActuelle = "Amazon Prime";
  console.log("Lancement d'Amazon Prime");
}

function lancerDisneyPlus() {
  if (!televisionAllumee) {
    console.log("Télévision éteinte");
    return;
  }
  historique.push(applicationActuelle);
  applicationActuelle = "Disney+";
  console.log("Lancement de Disney+");
}

function afficherChaine(numero: number) {
  if (!televisionAllumee) {
    console.log("Télévision éteinte");
    return;
  }
  historique.push(applicationActuelle);
  applicationActuelle = `Chaîne ${numero}`;
  console.log(`Affichage de la chaîne ${numero}`);
}

function retourArriere() {
  if (historique.length === 0) {
    console.log("Pas d'historique");
    return;
  }
  const precedent = historique.pop();
  console.log(`Retour à: ${precedent}`);
  applicationActuelle = precedent || "";
}

allumer();
lancerNetflix();
lancerAmazonPrime();
afficherChaine(5);
retourArriere();
retourArriere();
