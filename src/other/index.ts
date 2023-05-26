import { OperatorFactory } from "./SimpleFactory";
import StrategyContext from "./StrategyModule";
import {
  Person,
  DecoratorA,
  DecoratorB,
  TShirt,
  Shoe,
} from "./DecoratorModule";

// 调用工厂方法
export function OperatorFactoryAction() {
  const operator = new OperatorFactory().createOperator("-");
  operator.numberA = 2;
  operator.numberB = 1;
  const result = operator.operatorAction();
  console.log(result);
}

// 策略工厂方法
export function StrategyAction() {
  const context = new StrategyContext("off");
  console.log(context.getResult(800));
}

// 装饰方法
export function Decorator() {
  const person: Person = new Person("adai");
  const decoratorA = new DecoratorA();
  const decoratorB = new DecoratorB();
  decoratorA.decoratorAction(person);
  decoratorB.decoratorAction(person);
}

export function FineryAction() {
  const person: Person = new Person("adai");
  const t = new TShirt("");
  t.decorator(person);
  const s = new Shoe("");
  s.decorator(t);
  s.show();
}
