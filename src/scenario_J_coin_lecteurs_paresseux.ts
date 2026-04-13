const livres = [
  {
    titre: "1984",
    auteur: "George Orwell",
    genre: "Science-fiction",
    dateAcquisition: "2020-01-15",
    zone: "A",
    emplacement: 12,
  },
  {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    genre: "Conte",
    dateAcquisition: "2019-05-20",
    zone: "B",
    emplacement: 5,
  },
  {
    titre: "Harry Potter",
    auteur: "J.K. Rowling",
    genre: "Fantasy",
    dateAcquisition: "2021-03-10",
    zone: "C",
    emplacement: 8,
  },
  {
    titre: "Les Misérables",
    auteur: "Victor Hugo",
    genre: "Roman",
    dateAcquisition: "2018-11-30",
    zone: "A",
    emplacement: 20,
  },
];

let indexActuel = 0;

function parcourirParTitre() {
  const livresTries = [...livres].sort((a, b) => a.titre.localeCompare(b.titre));
  console.log(`Livre: ${livresTries[indexActuel].titre}`);
  console.log(
    `Zone: ${livresTries[indexActuel].zone}, Emplacement: ${livresTries[indexActuel].emplacement}`
  );
}

function parcourirParAuteur() {
  const livresTries = [...livres].sort((a, b) =>
    a.auteur.localeCompare(b.auteur)
  );
  console.log(`Livre: ${livresTries[indexActuel].titre} par ${livresTries[indexActuel].auteur}`);
  console.log(
    `Zone: ${livresTries[indexActuel].zone}, Emplacement: ${livresTries[indexActuel].emplacement}`
  );
}

function parcourirParGenre() {
  const livresTries = [...livres].sort((a, b) => a.genre.localeCompare(b.genre));
  console.log(`Livre: ${livresTries[indexActuel].titre} (${livresTries[indexActuel].genre})`);
  console.log(
    `Zone: ${livresTries[indexActuel].zone}, Emplacement: ${livresTries[indexActuel].emplacement}`
  );
}

function parcourirParDate() {
  const livresTries = [...livres].sort(
    (a, b) =>
      new Date(a.dateAcquisition).getTime() -
      new Date(b.dateAcquisition).getTime()
  );
  console.log(`Livre: ${livresTries[indexActuel].titre} (acquis le ${livresTries[indexActuel].dateAcquisition})`);
  console.log(
    `Zone: ${livresTries[indexActuel].zone}, Emplacement: ${livresTries[indexActuel].emplacement}`
  );
}

function suivant() {
  indexActuel++;
  if (indexActuel >= livres.length) {
    indexActuel = 0;
  }
}

const typeParcours: string = "auteur";

if (typeParcours === "titre") {
  parcourirParTitre();
} else if (typeParcours === "auteur") {
  parcourirParAuteur();
} else if (typeParcours === "genre") {
  parcourirParGenre();
} else if (typeParcours === "date") {
  parcourirParDate();
}

suivant();

if (typeParcours === "auteur") {
  parcourirParAuteur();
}
