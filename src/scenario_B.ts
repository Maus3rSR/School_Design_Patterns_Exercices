// Comportement à tous les composants de l'organisation
interface OrganizationComponent {
  display(depth: number): void;
}

// Les employés sont des composants de l'organisation
class Employee implements OrganizationComponent {
  constructor(private firstname: string, private name: string) {}

  display(depth: number = 0): void {
    console.log(
      `${"\t".repeat(depth)}Employee : ${this.firstname} ${this.name}`
    );
  }
}

// Les départements sont des composants de l'organisation
// Qui peuvent inclure des employés et des départements (tout objet qui respecte le comportement OrganizationComponent)
class Department implements OrganizationComponent {
  constructor(private name: string) {}

  private children: OrganizationComponent[] = [];

  add(component: OrganizationComponent): void {
    this.children.push(component);
  }

  display(depth: number = 0): void {
    console.log(`${"\t".repeat(depth)}Department : ${this.name}`);
    for (const child of this.children) {
      child.display(depth + 1);
    }
  }
}

// Code client
function main() {
  const entreprise = new Department("Entreprise XXX");
  const directionGenerale = new Department("Direction Générale");
  const departementTechnique = new Department("Département technique");
  const it = new Department("IT");
  const web = new Department("Web");
  const departementCommercial = new Department("Département commercial");
  const ventes = new Department("Ventes");
  const achats = new Department("Achats");
  const departementFinancier = new Department("Département financier");
  const rh = new Department("RH");
  const comptabilité = new Department("Comptabilité");
  const administration = new Department("Administration");

  entreprise.add(directionGenerale);

  directionGenerale.add(departementTechnique);
  directionGenerale.add(departementCommercial);
  directionGenerale.add(departementFinancier);

  departementTechnique.add(it);
  departementTechnique.add(web);

  departementCommercial.add(ventes);
  departementCommercial.add(achats);

  departementFinancier.add(rh);
  departementFinancier.add(comptabilité);
  departementFinancier.add(administration);

  const employeeA = new Employee("John", "Doe");
  const employeeB = new Employee("Jane", "Doe");
  const employeeC = new Employee("John", "Boe");

  it.add(employeeA);
  it.add(employeeB);
  it.add(employeeC);

  web.add(employeeA);
  web.add(employeeC);

  administration.add(employeeC);
  comptabilité.add(employeeA);

  // Affichage de l'organigramme
  entreprise.display();
}

main();
