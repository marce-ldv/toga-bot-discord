import React, { FunctionComponent } from 'react';
import { Button } from '@material-ui/core';
import useButtonColorTogglePresenter from '../../../presenters/colorChanger/colorChangerPresenter';

// Representational component 🙋‍♀️
const ButtonColorToggle: FunctionComponent = ({children}) => {
  const [color, onClick] = useButtonColorTogglePresenter();
  return (
    <Button color={color} onClick={() => onClick()}>{children}</Button>
  );
};

export default ButtonColorToggle;
