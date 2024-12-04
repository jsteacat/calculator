interface ICalculator {
  memory: number | null
  result: number
  history: string[]
  set: (num: number) => void
  plus: (num: number) => void
  minus: (num: number) => void
  multiply: (num: number) => void
  divide: (num: number) => void
  pow: (num: number) => void
  clear: () => void
  showHistory: () => void
}

class Calculator implements ICalculator{
  memory: number | null = null
  result: number = 0
  history: string[] = []

  constructor(num?: number) {
    this.memory = num ?? null
  }

  set(num: number) {
    if (isNaN(Number(num))) return
    this.result = num
    this.log(`Установили ${num}`)
    this.memory = num
  }

  plus(num: number) {
    if (!this.memory || isNaN(Number(num))) return
    this.result += num
    this.log(`+${num}`)
    this.memory = this.result
  }

  minus(num: number) {
    if (!this.memory || isNaN(Number(num))) return
    this.result -= num
    this.log(`-${num}`)
    this.memory = this.result
  }

  multiply(num: number) {
    if (!this.memory || isNaN(Number(num))) return
    this.result *= num
    this.log(`*${num}`)
    this.memory = this.result
  }

  divide(num: number) {
    if (!this.memory || isNaN(Number(num))) return
    this.result /= num
    this.log(`:${num}`)
    this.memory = this.result
  }

  pow(num: number) {
    if (!this.memory || isNaN(Number(num))) return
    this.result **= num
    this.log(`^${num}`)
    this.memory = this.result
  }

  clear() {
    this.result = 0
    this.log('Очистка')
    this.memory = null
    //this.history = [] should I clear history?
  }

  showHistory() {
    this.history.forEach((item) => {
      console.log(item)
    })
  }

  private log(action: string) {
    const logMessage = `Память: [${this.memory ? this.memory : 'Нет'}] | Операция: [${action}] | Результат: [${this.result}]`
    this.history.push(logMessage)
    console.log(logMessage)
  }
}

const calc = new Calculator()

calc.set(10)
calc.plus(5)
calc.multiply(3)
calc.divide(45)
calc.clear()
calc.set(3)
calc.pow(2)
calc.minus(4)
calc.clear()
console.log('------- history of operations --------')
calc.showHistory()
