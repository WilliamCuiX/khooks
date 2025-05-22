import { useState } from 'react';

interface UseCounterOptions {
  initialValue?: number;
}

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setValue: (value: number) => void;
}

const useCounter = (options?: UseCounterOptions): UseCounterReturn => {
  const { initialValue = 0 } = options || {};
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);
  const reset = () => setCount(initialValue);
  const setValue = (value: number) => setCount(value);

  return {
    count,
    increment,
    decrement,
    reset,
    setValue,
  };
};

export default useCounter;
