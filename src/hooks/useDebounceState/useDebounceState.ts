import { useEffect, useState } from 'react';
import { UseDebounceStateProps, UseDebounceStateReturnedValue } from './useDebounceState.types';

export const useDebounceState = <TInitialValue>({
  onDebounceChange,
  initialValue,
  debounceTime,
}: UseDebounceStateProps<TInitialValue>): UseDebounceStateReturnedValue<TInitialValue> => {
  const [state, setState] = useState<TInitialValue | undefined>(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => onDebounceChange(state), debounceTime);
    return () => {
      clearTimeout(timer);
    };
  }, [state]);

  return [state, setState];
};
