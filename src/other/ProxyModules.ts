export class ReceiverObject {
  constructor(public name: string) {}
}

// 这里成了代理者自己在送了：继承后变为自己
export class PursuerObject {
  sendFlower() {
    console.log("send flower");
  }
  sendGift() {
    console.log("send gift");
  }
}
export class ProxyObject extends PursuerObject {
  receiver: ReceiverObject;
  constructor(receiver: ReceiverObject) {
    super();
    this.receiver = receiver;
  }
  sendFlower(): void {
    console.log(`向${this.receiver.name}`);
    super.sendFlower();
  }

  sendGift(): void {
    console.log(`向${this.receiver.name}`);
    super.sendGift();
  }
}

/***** 代理模式 *****/
interface SendGift {
  sendOne(): void;
  sendTwo(): void;
  sendThree(): void;
}

export class Prusuit implements SendGift {
  receiver: ReceiverObject;
  constructor(receiver: ReceiverObject) {
    this.receiver = receiver;
  }

  sendOne(): void {
    console.log(`向${this.receiver.name}send1`);
  }

  sendTwo(): void {
    console.log(`向${this.receiver.name}send2`);
  }

  sendThree(): void {
    console.log(`向${this.receiver.name}send3`);
  }
}

export class Proxy implements SendGift {
  pursuit: Prusuit;
  constructor(pursuit: Prusuit) {
    this.pursuit = pursuit;
  }
  sendOne(): void {
    this.pursuit.sendOne();
  }
  sendThree(): void {
    this.pursuit.sendThree();
  }
  sendTwo(): void {
    this.pursuit.sendTwo();
  }
}
