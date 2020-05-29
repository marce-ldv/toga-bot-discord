import React, { FunctionComponent } from 'react';

export interface CounterProps {
  value: number;
}

const CounterText: FunctionComponent<CounterProps> = ({value}) => {
  return (
    <div>{value}</div>
  );
};

export default CounterText;
