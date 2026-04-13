function calculerPrixBoisson(
  boisson: string,
  lait: boolean,
  laitCoco: boolean,
  chantilly: boolean,
  vanille: boolean,
  sucre: boolean
): number {
  let prix = 0;

  if (boisson === "cafe") {
    prix = 4;
  } else if (boisson === "the") {
    prix = 3;
  } else if (boisson === "chocolat") {
    prix = 5;
  }

  if (lait) prix += 1;
  if (laitCoco) prix += 2;
  if (chantilly) prix += 1;
  if (vanille) prix += 0.5;

  return prix;
}

function obtenirDescription(
  boisson: string,
  lait: boolean,
  laitCoco: boolean,
  chantilly: boolean,
  vanille: boolean,
  sucre: boolean
): string {
  let desc = boisson.charAt(0).toUpperCase() + boisson.slice(1);

  if (lait) desc += ", lait";
  if (laitCoco) desc += ", lait de coco";
  if (chantilly) desc += ", chantilly";
  if (vanille) desc += ", saveur vanille";
  if (sucre) desc += ", sucre";

  return desc;
}

const prix1 = calculerPrixBoisson("cafe", false, true, true, true, false);
const desc1 = obtenirDescription("cafe", false, true, true, true, false);
console.log(`${desc1} - ${prix1}€`);

const prix2 = calculerPrixBoisson("cafe", true, false, false, false, true);
const desc2 = obtenirDescription("cafe", true, false, false, false, true);
console.log(`${desc2} - ${prix2}€`);
