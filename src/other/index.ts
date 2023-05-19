import { OperatorFactory } from "./SimpleFactory";
import StrategyContext from "./StrategyModule";

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
