import React, { FunctionComponent } from 'react';
import ButtonColorToggle from '../../components/representations/atom/ButtonColorToggler';
import CounterContainer from '../../components/containers/counter';

const HomePage: FunctionComponent = () => {
  return (
    <div>
      Button Color Toggle: <ButtonColorToggle>Press Me</ButtonColorToggle>
      <div>
        Button Counter: <CounterContainer />
      </div>
    </div>
  );
};

export default HomePage;
