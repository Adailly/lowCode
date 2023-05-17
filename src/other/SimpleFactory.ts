export class Operator {
  numberA: number;
  numberB: number;

  constructor() {
    this.numberA = 0;
    this.numberB = 0;
  }

  operatorAction(): number {
    let result = 0;
    return result;
  }
}
export class AddOperator extends Operator {
  operatorAction(): number {
    let result = this.numberA + this.numberB;
    return result;
  }
}
export class SubOperator extends Operator {
  operatorAction(): number {
    let result = this.numberA - this.numberB;
    return result;
  }
}

export class OperatorFactory {
  createOperator(letter: string): Operator {
    let operator: Operator;
    switch (letter) {
      case "+":
        operator = new AddOperator();
        break;
      case "-":
        operator = new SubOperator();
        break;
      default:
        operator = new Operator();
        break;
    }
    return operator;
  }
}
