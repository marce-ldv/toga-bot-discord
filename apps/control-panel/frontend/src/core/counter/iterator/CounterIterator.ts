import Counter from '../model/counter';
import CounterValue from '../../shared/counter/counterValue';

export default class CounterIterator {
  private counter: Counter;

  constructor(initialValue: number = 0) {
    const counterValue = new CounterValue(initialValue);
    this.counter = new Counter(counterValue);
  }

  public getCount(): number {
    const {counter} = this;
    return counter.count;
  }

  public incrementCounter(qty: number): void {
    const {counter} = this;
    counter.increment(qty);
  }

  public decrementCounter(qty: number): void {
    const {counter} = this;
    counter.decrement(qty);
  }
}