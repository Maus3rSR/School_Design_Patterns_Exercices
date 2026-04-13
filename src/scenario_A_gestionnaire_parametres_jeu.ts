let difficulte = "normal";
let langue = "fr";
let volumeMusique = 80;
let volumeEffets = 70;
let resolutionEcran = "1920x1080";
let qualiteGraphique = "haute";

function getDifficulte() {
  return difficulte;
}

function setDifficulte(value: string) {
  difficulte = value;
}

function getLangue() {
  return langue;
}

function setLangue(value: string) {
  langue = value;
}

function getVolumeMusique() {
  return volumeMusique;
}

function setVolumeMusique(value: number) {
  volumeMusique = value;
}

function getVolumeEffets() {
  return volumeEffets;
}

function setVolumeEffets(value: number) {
  volumeEffets = value;
}

function getResolutionEcran() {
  return resolutionEcran;
}

function setResolutionEcran(value: string) {
  resolutionEcran = value;
}

function getQualiteGraphique() {
  return qualiteGraphique;
}

function setQualiteGraphique(value: string) {
  qualiteGraphique = value;
}

setDifficulte("difficile");
setVolumeMusique(100);
console.log(getDifficulte());
console.log(getVolumeMusique());
