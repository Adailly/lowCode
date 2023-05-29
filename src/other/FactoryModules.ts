export class Product {
  numberA: number;
  numberB: number;
  addResult(): Number {
    return this.numberA + this.numberB;
  }
  subResult() {
    return this.numberA - this.numberB;
  }
}
export interface Factory {
  makeProduct(): Product;
}

export class AddProduct extends Product {}
export class AddFactory implements Factory {
  makeProduct(): Product {
    return new AddProduct();
  }
}

export class SubProduct extends Product {}
export class SubFactory implements Factory {
  makeProduct(): Product {
    return new SubProduct();
  }
}

export function FactoryModulesAction() {
  const factory: Factory = new AddFactory();
  const p: Product = factory.makeProduct();
  p.addResult();
  p.subResult();
}
