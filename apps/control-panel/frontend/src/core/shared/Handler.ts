import Setter from './SetterDispatch';

type HandlerType<T> = (setter: Setter<T>) => void;
export default HandlerType;