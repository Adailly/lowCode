// 相同部分：都要有结果
class StrategyRoot {
  getResult(money: number): number {
    return money;
  }
}
// 不同部分：计算结果的方式不同
// 正常
class StrategyNormal extends StrategyRoot {
  getResult(money: number): number {
    return money;
  }
}
// 折扣
class StrategyDiscount extends StrategyRoot {
  private discount: number;
  constructor(discount: number) {
    super();
    this.discount = discount;
  }
  getResult(money: number): number {
    return money * this.discount;
  }
}
// 满减
class StrategyMoneyOff extends StrategyRoot {
  private fullMoney: number;
  private off: number;
  constructor(fullMoney: number, off: number) {
    super();
    this.fullMoney = fullMoney;
    this.off = off;
  }
  getResult(money: number): number {
    return money - Math.floor(money / this.fullMoney) * this.off;
  }
}
// 策略上下文: 和简单工厂相结合
class StrategyContext {
  private strategy: StrategyRoot;
  constructor(type: string) {
    switch (type) {
      case "discount":
        this.strategy = new StrategyDiscount(0.8);
        break;
      case "off":
        this.strategy = new StrategyMoneyOff(240, 50);
        break;
      default:
        this.strategy = new StrategyNormal();
        break;
    }
  }
  getResult(money: number): number {
    return this.strategy.getResult(money);
  }
}

export default StrategyContext;
