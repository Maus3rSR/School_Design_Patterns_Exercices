type Settings = {
  difficulty: string;
  language: string;
  music_volume: number;
  sound_volume: number;
  resolution: string;
  graphics_quality: string;
};

class GameParameters {
  // Propriété statique pour stocker l'instance unique
  private static instance: GameParameters;

  // Constructeur privé
  private constructor() {}

  // Méthode statique, seul point d'entré pour créer/récupérer l'instance
  public static getInstance(): GameParameters {
    if (!GameParameters.instance) {
      GameParameters.instance = new GameParameters();
    }
    return GameParameters.instance;
  }

  // Les différents paramètres du jeu
  private settings: Settings = {
    difficulty: "easy",
    language: "en",
    music_volume: 100,
    sound_volume: 100,
    resolution: "1920x1080",
    graphics_quality: "high",
  };

  getSetting(key: keyof Settings) {
    return this.settings[key];
  }

  setSetting<K extends keyof Settings>(key: K, value: Settings[K]): void {
    this.settings[key] = value;
  }
}

// Code client d'exemple
function main() {
  const gameParameters = GameParameters.getInstance();

  console.log("Difficulty: ", gameParameters.getSetting("difficulty"));

  gameParameters.setSetting("difficulty", "hard");

  // On récupére une instance de GameParameters dans une autre variable
  const gameParameters2 = GameParameters.getInstance();
  console.log("Difficulty: ", gameParameters2.getSetting("difficulty"));

  // On vérifié que les deux variables difficulty ont les mêmes valeurs
  console.log(
    gameParameters.getSetting("difficulty") ===
      gameParameters2.getSetting("difficulty")
  );
  // On vérifié que les deux variables pointent vers la même instance
  console.log(gameParameters === gameParameters2);
}

main();
