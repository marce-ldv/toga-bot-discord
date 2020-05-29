import React, { FunctionComponent } from 'react';
import CounterText from '../../atom/CounterText';
import {Button, Typography} from '@material-ui/core';

interface CounterInterface {
  counter: number;
  onClick: () => void,
  errors: string[],
}

const Counter: FunctionComponent<CounterInterface> = ({counter, onClick, errors}) => {
  return (
    <div>
      <Button onClick={() => onClick()}>Increment</Button>
      <CounterText value={counter} />
      {errors.length > 0 && errors.map((e, i) => <Typography key={i} style={{color: 'red'}}> {e}</Typography>)}
    </div>
  );
};

export default Counter;
