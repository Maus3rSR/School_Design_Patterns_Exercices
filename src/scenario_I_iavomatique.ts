const vetements = [
  { nom: "T-shirt blanc", couleur: "blanc", tissu: "coton", salissure: "faible" },
  { nom: "Jean bleu", couleur: "fonce", tissu: "coton", salissure: "elevee" },
  { nom: "Pull rouge", couleur: "clair", tissu: "laine", salissure: "faible" },
  {
    nom: "Chemise noire",
    couleur: "fonce",
    tissu: "synthetique",
    salissure: "moyenne",
  },
  { nom: "Pantalon beige", couleur: "clair", tissu: "coton", salissure: "elevee" },
];

function trierParCouleur() {
  const blancs = vetements.filter((v) => v.couleur === "blanc");
  const clairs = vetements.filter((v) => v.couleur === "clair");
  const fonces = vetements.filter((v) => v.couleur === "fonce");

  console.log("Tri par couleur:");
  console.log("Blancs:", blancs.map((v) => v.nom));
  console.log("Clairs:", clairs.map((v) => v.nom));
  console.log("Foncés:", fonces.map((v) => v.nom));
}

function trierParTissu() {
  const coton = vetements.filter((v) => v.tissu === "coton");
  const laine = vetements.filter((v) => v.tissu === "laine");
  const synthetique = vetements.filter((v) => v.tissu === "synthetique");

  console.log("Tri par tissu:");
  console.log("Coton:", coton.map((v) => v.nom));
  console.log("Laine:", laine.map((v) => v.nom));
  console.log("Synthétique:", synthetique.map((v) => v.nom));
}

function trierParSalissure() {
  const faible = vetements.filter((v) => v.salissure === "faible");
  const moyenne = vetements.filter((v) => v.salissure === "moyenne");
  const elevee = vetements.filter((v) => v.salissure === "elevee");

  console.log("Tri par salissure:");
  console.log("Faible:", faible.map((v) => v.nom));
  console.log("Moyenne:", moyenne.map((v) => v.nom));
  console.log("Élevée:", elevee.map((v) => v.nom));
}

const methodeTri = "couleur";

if (methodeTri === "couleur") {
  trierParCouleur();
} else if (methodeTri === "tissu") {
  trierParTissu();
} else if (methodeTri === "salissure") {
  trierParSalissure();
}
