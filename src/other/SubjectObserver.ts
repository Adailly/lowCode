// 主题
abstract class Subject {
  // 状态，状态改变时进行通知
  private _subjectState: string
  set subjectState(state: string) {
    this._subjectState = state
    this.notity()
  }

  // 管理
  obs: Observer[] = []
  addObserver(observer: Observer) {
    this.obs.push(observer)
  }
  remove(observer: Observer) {
    this.obs.forEach((element, index, array) => {
      if (element === observer) {
        array.splice(index, 1)
      }
    })
  }
  notity() {
    this.obs.forEach((element) => {
      element.update()
    })
  }
}

class SubjectA extends Subject {}

class SubjectB extends Subject {}

// 观察者
abstract class Observer {
  abstract name: string
  abstract update(): void
}

class ObserverA extends Observer {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }

  update(): void {
    console.log(`${this.name}接到通知进行更新`)
  }
}

class ObserverB extends Observer {
  name: string
  constructor(name: string) {
    super()
    this.name = name
  }

  update(): void {
    console.log(`${this.name}接到通知进行更新`)
  }
}

export function SubjectAction() {
  const sbA: SubjectA = new SubjectA()
  const obA = new ObserverA('a')
  const obB = new ObserverB('b')
  sbA.addObserver(obA)
  sbA.addObserver(obB)
  sbA.remove(obA)
  sbA.subjectState = 'update'
}
