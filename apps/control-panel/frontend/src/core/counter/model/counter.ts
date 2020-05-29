import CounterValue from '../../shared/counter/counterValue';

export default class Counter {
  constructor(private _count: CounterValue) {}

  public static create(value: CounterValue) {
    return new Counter(value);
  }

  get count(): number {
    return this._count.value;
  }

  public increment(qty: number) {
    const { value } = this._count;
    this._count = new CounterValue(value + qty);
  }

  public decrement(qty: number) {
    const { value } = this._count;
    this._count = new CounterValue(value - qty);
  }
}