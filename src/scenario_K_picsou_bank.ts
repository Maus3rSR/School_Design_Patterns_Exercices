function approuverPret(montant: number) {
  if (montant >= 0 && montant <= 100000) {
    console.log(`Prêt de ${montant}€ approuvé par l'employé de banque`);
    return true;
  } else if (montant > 100000 && montant <= 500000) {
    console.log(`Prêt de ${montant}€ transmis au manager`);
    console.log(`Prêt de ${montant}€ approuvé par le manager`);
    return true;
  } else if (montant > 500000 && montant <= 10000000) {
    console.log(`Prêt de ${montant}€ transmis au chef de département`);
    console.log(`Prêt de ${montant}€ approuvé par le chef de département`);
    return true;
  } else if (montant > 10000000) {
    console.log(`Prêt de ${montant}€ transmis au directeur financier`);
    console.log(`Prêt de ${montant}€ approuvé par le directeur financier`);
    return true;
  }
  return false;
}

approuverPret(50000);
approuverPret(250000);
approuverPret(1500000);
approuverPret(15000000);
