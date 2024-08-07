import { useEffect, useState } from 'react';

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const delayDebounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(delayDebounceTimer);
    };
  }, [value, delay]);
  return debouncedValue;
};
