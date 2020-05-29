import ValueObject from '../ValueObject';

export default class CounterValue extends ValueObject {
  constructor(private _value: number) {
    super();
    this.shouldBeValid();
  }

  private shouldBeValid() {
    const {_value: value} = this;
    if (value > 10 || value < 0) {
      throw new Error(`The value ${value} is not a valid number`);
    }
  }

  get value(): number {
    return this._value;
  }
}