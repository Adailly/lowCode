export class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  show() {
    console.log(`${this.name}的装扮：`);
  }
}

interface Decorator {
  decoratorAction(person: Person): void;
}

export class DecoratorA implements Decorator {
  decoratorAction(person: Person) {
    console.log(`装饰A-${person.name}`);
  }
}

export class DecoratorB implements Decorator {
  decoratorAction(person: Person): void {
    console.log(`装饰B-${person.name}`);
  }
}

// 装饰：对person进行扩展
class Finery extends Person {
  protected component: Person;

  decorator(component: Person) {
    this.component = component;
  }

  show(): void {
    if (this.component != null) {
      this.component.show();
    }
  }
}

export class TShirt extends Finery {
  show(): void {
    super.show();
    console.log("T恤");
  }
}
export class Shoe extends Finery {
  show(): void {
    super.show();
    console.log("鞋子");
  }
}
