import { OperatorFactory } from "./SimpleFactory";

// 调用工厂方法
export function OperatorFactoryAction() {
  const operator = new OperatorFactory().createOperator("-");
  operator.numberA = 2;
  operator.numberB = 1;
  const result = operator.operatorAction();
  console.log(result);
}
