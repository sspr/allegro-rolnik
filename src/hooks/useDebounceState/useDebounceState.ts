import { useEffect, useState } from 'react';
import { UseDebounceStateProps, UseDebounceStateReturnedValue } from './useDebounceState.types';

export const useDebounceState = ({
  onDebounceChange,
  initialValue,
  debounceTime,
}: UseDebounceStateProps): UseDebounceStateReturnedValue => {
  const [state, setState] = useState<number | undefined>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => onDebounceChange(state), debounceTime);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return [state, setState];
};
