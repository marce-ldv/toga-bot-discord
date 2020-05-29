import {useState} from 'react';
import CounterIterator from '../iterator/CounterIterator';

/**
 * Este adapter al no estar acomplado a un componente puede ser usado desde cualquier componente y testear de manera
 * isolada
 *
 * Esto es un ejemplo llevado al extremo, no tiene sentido usar containers y adapters en casos de usos simples,
 * estos agregan una capa de complejidad extra
 */
const counterIterator = new CounterIterator();

const useCounterAdapter = (): [number, string[], () => void] => {
  const [errors, setErrors] = useState<string[]>([]);
  const [count, setCount] = useState<number>(counterIterator.getCount());

  const incrementCounter = () => {
    try {
      counterIterator.incrementCounter(1);
    } catch (e) {
      setErrors([e.message]);
    }
    setCount(counterIterator.getCount());
  }

  return [
    count,
    errors,
    incrementCounter,
  ];
}

export default useCounterAdapter;