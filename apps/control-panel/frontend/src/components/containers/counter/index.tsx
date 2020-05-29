import React, { FunctionComponent } from 'react';
import useCounterAdapter from '../../../core/counter/adapters/counterAdapter';
import Counter from '../../representations/molecule/Counter';

const CounterContainer: FunctionComponent = () => {
  const [count, errors, increment] = useCounterAdapter();
  return (
    <Counter counter={count} onClick={increment} errors={errors} />
  );
};

export default CounterContainer;
