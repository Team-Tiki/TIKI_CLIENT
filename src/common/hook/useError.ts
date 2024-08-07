import { useCallback, useState } from 'react';

export const useError = <T extends object>(initialValue: T) => {
  const [error, setError] = useState<T>(initialValue);

  const setErrors = useCallback((value: T) => {
    setError(value);
  }, []);

  const updateFieldError = useCallback(<K extends keyof T>(field: K, message: string) => {
    setError((prev) => ({
      ...prev,
      [field]: message,
    }));
  }, []);

  const clearFieldError = useCallback(<K extends keyof T>(field: K) => {
    setError((prev) => ({
      ...prev,
      [field]: undefined,
    }));
  }, []);

  return { error, setErrors, updateFieldError, clearFieldError };
};
