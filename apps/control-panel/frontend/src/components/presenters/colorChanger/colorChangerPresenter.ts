import {useState} from 'react';
import { PropTypes } from '@material-ui/core';

// This is a presenter 👨‍🎓, can be re usable for all other presentational components
const useButtonColorTogglePresenter = (): [PropTypes.Color, () => void] => {
  const [color, setColor] = useState<PropTypes.Color>('primary');
  const onClick = () => color === 'primary' ? setColor('secondary') : setColor('primary');

  return [
    color,
    onClick,
  ]
}

export default useButtonColorTogglePresenter;
