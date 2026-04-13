const avions: { id: string; piste: number | null }[] = [
  { id: "A320-001", piste: null },
  { id: "B737-002", piste: null },
  { id: "A380-003", piste: null },
];

const pistes = [
  { numero: 1, occupee: false },
  { numero: 2, occupee: false },
  { numero: 3, occupee: false },
];

function demanderAtterrissage(avionId: string) {
  const avion = avions.find((a) => a.id === avionId);
  if (!avion) {
    console.log("Avion non trouvé");
    return;
  }

  const pisteLibre = pistes.find((p) => !p.occupee);
  if (!pisteLibre) {
    console.log(`Atterrissage refusé pour ${avionId}, aucune piste disponible`);
    return;
  }

  pisteLibre.occupee = true;
  avion.piste = pisteLibre.numero;
  console.log(`${avionId} autorisé à atterrir sur piste ${pisteLibre.numero}`);
}

function demanderDecollage(avionId: string) {
  const avion = avions.find((a) => a.id === avionId);
  if (!avion || avion.piste === null) {
    console.log("Avion non trouvé ou pas sur une piste");
    return;
  }

  const piste = pistes.find((p) => p.numero === avion.piste);
  if (piste) {
    piste.occupee = false;
    console.log(`${avionId} autorisé à décoller de la piste ${avion.piste}`);
    avion.piste = null;
  }
}

demanderAtterrissage("A320-001");
demanderAtterrissage("B737-002");
demanderDecollage("A320-001");
demanderAtterrissage("A380-003");
