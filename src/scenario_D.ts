interface Product {
  getPrice(): number;
  getDescription(): string;
}

class Coffee implements Product {
  getPrice(): number {
    return 5;
  }

  getDescription(): string {
    return "Coffee";
  }
}

class Tea implements Product {
  getPrice(): number {
    return 2;
  }
  getDescription(): string {
    return "Tea";
  }
}

// Classe de base qui servira de décorateur (effet de poupée russe)
class BeverageCustomization implements Product {
  constructor(protected readonly wrappeeProduct: Product) {}

  getPrice(): number {
    return this.wrappeeProduct.getPrice();
  }

  getDescription(): string {
    return this.wrappeeProduct.getDescription();
  }
}

class Chantilly extends BeverageCustomization {
  getPrice(): number {
    return 1 + super.getPrice();
  }

  getDescription(): string {
    return this.wrappeeProduct.getDescription() + " + Chantilly";
  }
}

class Sugar extends BeverageCustomization {
  getPrice(): number {
    return 0.5 + super.getPrice();
  }

  getDescription(): string {
    return this.wrappeeProduct.getDescription() + " + Sugar";
  }
}

class Chocolate extends BeverageCustomization {
  getPrice(): number {
    return 2 + super.getPrice();
  }

  getDescription(): string {
    return this.wrappeeProduct.getDescription() + " + Chocolate";
  }
}

class Matcha extends BeverageCustomization {
  getPrice(): number {
    return 4.2 + super.getPrice();
  }

  getDescription(): string {
    return this.wrappeeProduct.getDescription() + " + Matcha";
  }
}

// Code client
function main() {
  const coffee = new Coffee();
  console.log(coffee.getDescription(), coffee.getPrice() + "€");

  const coffeeWithChantilly = new Chantilly(coffee);
  console.log(
    coffeeWithChantilly.getDescription(),
    coffeeWithChantilly.getPrice() + "€"
  );

  const coffeeWithChantillyAndSugar = new Sugar(coffeeWithChantilly);
  console.log(
    coffeeWithChantillyAndSugar.getDescription(),
    coffeeWithChantillyAndSugar.getPrice() + "€"
  );

  const coffeeWithChantillyAndSugarAndChocolate = new Chocolate(
    coffeeWithChantillyAndSugar
  );
  console.log(
    coffeeWithChantillyAndSugarAndChocolate.getDescription(),
    coffeeWithChantillyAndSugarAndChocolate.getPrice() + "€"
  );

  const coffeeWithChantillyAndSugarAndChocolateAndMatcha = new Matcha(
    coffeeWithChantillyAndSugarAndChocolate
  );
  console.log(
    coffeeWithChantillyAndSugarAndChocolateAndMatcha.getDescription(),
    coffeeWithChantillyAndSugarAndChocolateAndMatcha.getPrice() + "€"
  );

  const tea = new Tea();
  console.log(tea.getDescription(), tea.getPrice() + "€");

  const teaWithChantilly = new Chantilly(tea);
  console.log(
    teaWithChantilly.getDescription(),
    teaWithChantilly.getPrice() + "€"
  );

  const teaWithSugarAndMatcha = new Matcha(new Sugar(tea));
  console.log(
    teaWithSugarAndMatcha.getDescription(),
    teaWithSugarAndMatcha.getPrice() + "€"
  );
}

main();
