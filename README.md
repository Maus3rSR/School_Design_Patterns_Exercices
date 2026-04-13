# TP sur les designs patterns

- Dans chacun des scénarios, choisissez un design pattern adapté et écrivez le pseudo-code correspondant au scénario.
- Par défaut nous utilisons le langage TypeScript. Néanmoins vous pouvez utiliser le langage de votre choix (Python, JavaScript, C#, Java, etc.) pour écrire les exercices.
- Le code n'a pas forcément besoin d'être fonctionnel, le but est d'écrire du pseudo-code représentant un design pattern. Cependant cela est mieux si le langage ne relève pas d'erreur à l'écriture du code dans le cas des langages typés.
- Pour chaque design pattern implémenté, écrivez un exemple d'utilisation.

## Exemple pour un pattern singleton :

**Scénario** :
Dans une application de gestion scolaire, plusieurs composants ont besoin d'accéder à la configuration centrale (chemin des fichiers, paramètres de connexion). Nous devons garantir qu'une seule instance existe et soit accessible partout.

**Pseudo-Code PhP pour un pattern Singleton** :

```php
class Config extends Singleton
{
    private static $instance;
    private $hashmap = [];
    private function __construct() {}

    public static function getInstance(): Config
    {
        if (self::$instance === null) {
            self::$instance = new Config();
        }
        return self::$instance;
    }

    public function getValue(string $key): string
    {
        return $this->hashmap[$key];
    }

    public function setValue(string $key, string $value): void
    {
        $this->hashmap[$key] = $value;
    }
}

/**
 * The client code.
 */
$config1 = Config::getInstance();

$config1->setValue('log_path', 'log.txt');
$config1->setValue('db_connection_user', 'SchoolAdm04786543');
$config1->setValue('db_connection_database', 'SchoolAdm_db_04786543');

// En récupérant l'instance du singleton, nous pouvons accéder aux mêmes données de la même instance de la classe Config
$config2 = Config::getInstance();

print_r($config2->getValue('log_path') === 'log.txt'); // Devrait être à vrai
```

## Scénarios

### Scénario A: Gestionnaire de Paramètres de Jeu

**Pattern suggéré** : **Singleton**

- Une seule instance de configuration globale
- Accès centralisé aux paramètres

Dans un jeu vidéo, vous avez besoin de gérer les paramètres globaux du jeu de manière unique et centralisée.\
Exemples de paramètres configurables :

- Paramètres du gameplay
  - Difficulté
  - Langue
- Paramètres audio
  - Volume musique
  - Volume effets sonores
- Paramètres graphiques
  - Résolution écran
  - Qualité graphique

### Scénario B: Structure organisationnelle d'entreprise

**Pattern suggéré** : **Composite**

- Structure arborescente (départements/sous-départements)
- Traitement uniforme des éléments individuels et composites

Dans une grande entreprise, on peut trouver les départements et sous-départements suivants :

- Direction Générale
  - Secrétariat général
  - Département technique
    - IT
    - Web
  - Département commercial
    - Ventes
    - Achats
  - Département financier
    - RH
    - Comptabilité
    - Administration

Chaque département et sous-département peuvent avoir plusieurs employés.

Le programme doit pouvoir transcrire l'organigramme de cette entreprise.

### Scénario C: Interface de contrôle d'un jeu

**Pattern suggéré** : **Adapter**

- Adaptation de différentes interfaces de contrôleurs
- Interface commune pour des implémentations différentes

Un jeu doit pouvoir être contrôlé par plusieurs type de contrôleur : Clavier, Manette Xbox, Manette PS5.

Dans ce jeu nous pouvons faire les actions suivantes :

```ts
interface ControlerActions {
  sauter();
  attaquer();
  interargir();
}
```

Sauf que nos controlleurs ne sont pas pareil d'un controlleur à un autre :

- Clavier nous avons :
  - touche espace
  - clic gauche
  - clic droit
- Manette Xbox :
  - Bouton A
  - Bouton B
  - Bouton X
- Manette PS5 :
  - Bouton X
  - Bouton O
  - Bouton Triangle

Il faudrait que notre programme puisse adapter nos controlleurs pour qu'ils puissent se comporter comme un `ControlerActions`.

### Scénario D: Personnalisation de boissons

**Pattern suggéré** : **Decorator**

- Ajout dynamique de fonctionnalités (options)
- Composition d'objets pour créer des variantes

Dans un super café gourmant, on peut commander différentes boissons, et demander 0 à plusieurs options pour personnaliser notre boisson.

Chaque boisson à un coût et une description.
Chaque option aura un coût et une description.

Imaginons que nous avons une boisson café à 4€. Nous pourrions la personnaliser avec des options comme :

- Lait (+1€)
- Lait de coco (+2€)
- Chantilly (+1€)
- Saveur Vanille (+0.5€)
- Sucre (+0€)

Les personnalisations sont du coup multiples :

- Café, Lait de coco et Chantilly
- Café, Lait de coco et Saveur Vanille
- Café, Chantilly et Saveur Vanille, Sucre
- Café

Je pourrais donc me commander un café au lait de coco, Chantilly et Saveur Vanille :

- Le coût de la boisson serait de 7.5€
  La description de la boisson serait : `Café, lait de coco, Chantilly, Saveur Vanille`.

Notre programme doit pouvoir donc permettre de composer une boisson avec des options différentes de manière dynamique sans avoir besoin de modifier sa structure de base.

### Scénario E: Création de personnage d'un jeu vidéo

**Pattern suggéré** : **Factory Method**

- Création d'objets sans spécifier leur classe exacte
- Délégation de la création à des sous-classes

Dans un jeu vidéo de type RPG ou jeu d'aventure, vous avez besoin de créer différents types de personnages :

- Guerrier
- Magicien
- Archer

Ces personnages partagent le même comportement : "Attaquer". Mais ce ne sera pas la même attaque selon que le personnage soit un Guerrier, un Magicien ou un Archer.

On doit pouvoir ajouter d'autres personnages facilement en déléguant la création des personnages à une classe.

### Scénario F - Mortel Kebap

**Pattern suggéré** : **State**

- Comportement change selon l'état interne
- Transitions d'états bien définies

Un jeu très attendu, Mortel Kebap, est en cours de développement. C'est un jeu de combat où les personnages peuvent faire les actions suivantes :

- Ne rien faire (on parle d'IDLE)
- Attaquer
- Se déplacer à une certaine vitesse
- Sauter

**Dans certaines situations, le personnages peut, ou ne peut faire certaines actions :**

Quand le personnage ne fait rien, il peut :

- Attaquer
- Se déplacer
- Sauter

Quand le personnage attaque, il peut :

- Attaquer

Quand le personnage se déplace, il peut :

- Sauter
- Attaquer

Quand le personnage saute, il peut :

- Attaquer

Quand le pernnage est étourdi pendant quelques secondes, il ne peut rien faire

### Scénario G - Flying nugget airlines

**Pattern suggéré** : **Mediator**

- Communication centralisée entre objets
- Réduction du couplage entre composants

Dû à une augmentation du traffic aérien et en attendant l'ajout de nouvelles pistes d'atterissage pour accueillir au mieux ce traffic, une compagnie aérienne a besoin d'un nouveau système pour la tour de contrôle.

Ce système doit permettre de faire la gestion de l'atterissage et du décollage des avions sur les difféntes pistes, au travers de la tour de contrôle.

C'est la tour de contrôle qui a responsabilité de gérer la communication entre les avions et les pistes d'atterissage et d'opérer les différentes actions entre elles.

### Scénario H - TéléKommande

**Pattern suggéré** : **Command**

- Encapsulation des requêtes en objets
- Support de l'annulation (undo)

Une compagnie souhaite s'insérer sur le marché des télévisions intélligentes, où les télécommmandes ont des boutons permettant d'afficher directement des applications comme Netflix, Amazon Prime, Disney+, et les chaînes courantes. On peut effectuer des actions sur la télévision associée. On pourrait effectuer les actions suivantes :

- Allumer la télévision
- Eteindre la télévision
- Bouton pour lancer l'application Netflix
- Bouton pour lancer l'application Amazon Prime
- Bouton pour lancer l'application Disney+
- Bouton pour afficher un numéro de chaîne

Dans le futur, notre algorithme doit pouvoir effectuer un retour en arrière sur les actions. Par exemple, après avoir allumer la télévision, mis Netflix puis Amazon Prime, un bouton pour revenir en arrière permettrait de revenir sur la chaîne/application précédemment lancée.

### Scénario I - IAvomatique

**Pattern suggéré** : **Strategy**

- Algorithmes interchangeables
- Sélection dynamique de la stratégie de tri

Une entreprise a créé un lavomatique intelligent fonctionnant sur une IA entraînée qui permet de laver nos vêtements avec un tri automatique avant lavage.
Les clients peuvent donc choisir comment trier les vêtements de plusieurs façons :

- Par couleur (blancs, couleurs claires, couleurs foncées)
- Par type de tissu (coton, laine, synthéthique)
- Par niveau de saleté (vêtements très sales séparées des autres)

### Scénario J - Le Coin des Lecteurs Paresseux

**Pattern suggéré** : **Iterator**

- Parcours de collections de différentes manières
- Abstraction de la traversée

Une grande bibliothèque prestigieuse souhaite permettre à ses lecteurs paresseux de ne pas passer trop de temps à trouver un nouveau livre à lire à découvrir.
Cette bibliothèque met en place un logiciel permettant de parcourir les livres de différentes façon, selon un type de parcours.

Le lecteur, depuis une interface, peut choisir de parcourir les livres par :

- Nom de l'oeuvre
- Auteur
- Genre littéraire
- Date d'acquisition de la bibliothèque

Lorsqu'il lance une recherche en indiquant le type de recherche, un livre lui est présenté à l'écran. Il peut faire suivant pour voir le prochain livre, etc. Jusqu'à trouver un livre qui lui convient dont il pourra trouver le numéro de la zone et le numéro d'emplacement dans la bibliothèque pour le trouver et le lire.

### Scénario K - Picsou Bank

**Pattern suggéré** : **Chain of Responsibility**

- Chaîne de traitements
- Délégation selon des critères

Dans une banque renommée, les prêts doivent être approuvés dans la hierarchie de la banque en fonction du montant du prêt.

En fonction du montant, le prêt doit être approuvé par un responsable accrédité pour valider le montant.

Pour les montants entre

- 0 et 100 000, le prêt est approuvé par l'employé de la banque
- 100 000 et 500 000, le prêt est approuvé par le manager de l'équipe
- 500 000 et 10 000 000, le prêt est approuvé par le chef de département
- 10 000 000 et plus, le prêt est approuvé par le directeur Financier

### Scénario L - Création de personnage RPG complexe

**Pattern suggéré** : **Builder**

- Construction d'objets complexes étape par étape
- Séparation de la construction de la représentation
- Gestion des paramètres optionnels

Dans un jeu de rôle (RPG), la création d'un personnage nécessite de définir de nombreux attributs optionnels et obligatoires :

**Attributs obligatoires** :

- Nom
- Classe (Guerrier, Magicien, Voleur, etc.)
- Race (Humain, Elfe, Nain, etc.)
- Niveau
- Statistiques de base (Force, Agilité, Intelligence)

**Attributs optionnels** :

- Équipement (arme, armure)
- Compétences spéciales
- Inventaire d'objets
- Apparence physique
- Histoire personnelle

Le problème est que créer un personnage avec tous ces paramètres rend la fonction de création très complexe avec de nombreux paramètres optionnels. De plus, certaines combinaisons d'attributs peuvent être invalides (par exemple, un Magicien ne peut pas avoir une épée lourde).

Notre programme doit permettre de créer des personnages de manière flexible et lisible, en permettant de définir uniquement les attributs nécessaires tout en validant la cohérence des choix.
