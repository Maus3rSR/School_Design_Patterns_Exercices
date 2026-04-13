const employes = [
  { nom: "Alice", departement: "Direction Générale" },
  { nom: "Bob", departement: "Secrétariat général" },
  { nom: "Charlie", departement: "IT" },
  { nom: "David", departement: "Web" },
  { nom: "Eve", departement: "Ventes" },
  { nom: "Frank", departement: "Achats" },
  { nom: "Grace", departement: "RH" },
  { nom: "Heidi", departement: "Comptabilité" },
  { nom: "Ivan", departement: "Administration" },
];

function afficherEmployesDepartement(dept: string) {
  console.log(`Département: ${dept}`);
  employes.forEach((emp) => {
    if (emp.departement === dept) {
      console.log(`  - ${emp.nom}`);
    }
  });
}

function afficherTousLesEmployes() {
  console.log("Direction Générale");
  afficherEmployesDepartement("Direction Générale");
  console.log("  Secrétariat général");
  afficherEmployesDepartement("Secrétariat général");
  console.log("  Département technique");
  console.log("    IT");
  afficherEmployesDepartement("IT");
  console.log("    Web");
  afficherEmployesDepartement("Web");
  console.log("  Département commercial");
  console.log("    Ventes");
  afficherEmployesDepartement("Ventes");
  console.log("    Achats");
  afficherEmployesDepartement("Achats");
  console.log("  Département financier");
  console.log("    RH");
  afficherEmployesDepartement("RH");
  console.log("    Comptabilité");
  afficherEmployesDepartement("Comptabilité");
  console.log("    Administration");
  afficherEmployesDepartement("Administration");
}

afficherTousLesEmployes();
