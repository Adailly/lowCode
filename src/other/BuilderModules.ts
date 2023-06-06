export abstract class Builder {
  protected name: string
  protected age: string

  constructor(name: string, age: string) {
    this.name = name
    this.age = age
  }

  abstract methodA(): void
  abstract methodB(): void
  abstract methodC(): void
}

export class BuilderA extends Builder {
  methodA(): void {
    console.log('a-a')
  }
  methodB(): void {
    console.log('a-b')
  }
  methodC(): void {
    console.log('a-c')
  }
}
export class BuilderB extends Builder {
  methodA(): void {
    console.log('b-a')
  }
  methodB(): void {
    console.log('b-b')
  }
  methodC(): void {
    console.log('b-c')
  }
}

// 指挥者，隔离client和建造者
export class Director {
  // client告诉使用哪个builder
  private _builder: Builder
  constructor(builder: Builder) {
    this._builder = builder
  }

  set builder(builder: Builder) {
    this._builder = builder
  }
  // 执行build过程
  createBuilder() {
    this._builder.methodA()
    this._builder.methodB()
    this._builder.methodC()
  }
}

export function BuidlerAction() {
  const builderA = new BuilderA('a', '10')
  const director = new Director(builderA)
  director.createBuilder()

  director.builder = new BuilderB('b', 'b')
  director.createBuilder()
}

/**
 * 建造者模式
 */
// 产品
class Product {
  add() {
    console.log('product add')
  }
  show() {
    console.log('product show')
  }
}
// 抽象建造过程
abstract class ProductBuilder {
  abstract PartMethodA(): void
  abstract PartMethodB(): void
  abstract getResult(): Product
}
// 具体建造者
class ConcreteBuilderA extends ProductBuilder {
  private product = new Product()
  PartMethodA(): void {
    this.product.add()
  }
  PartMethodB(): void {
    this.product.add()
  }
  getResult(): Product {
    return this.product
  }
}
class ConcreteBuilderB extends ProductBuilder {
  private product = new Product()
  PartMethodA(): void {
    this.product.add()
  }
  PartMethodB(): void {
    this.product.add()
  }
  getResult(): Product {
    return this.product
  }
}
// 管理者
class ProductDirector {
  directorProduct(builder: ProductBuilder) {
    builder.PartMethodA()
    builder.PartMethodB()
  }
}
export function ProductdirectorBuilderAction() {
  const builderA = new ConcreteBuilderA()
  const builderB = new ConcreteBuilderB()

  const director = new ProductDirector()
  director.directorProduct(builderA)
  const p1 = builderA.getResult()
  p1.show()

  director.directorProduct(builderB)
  const p2 = builderB.getResult()
  p2.show()
}
