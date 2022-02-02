export type UseDebounceStateProps<TInitialValue> = {
  onDebounceChange: (value: TInitialValue | undefined) => void;
  initialValue: TInitialValue | undefined;
  debounceTime: number;
};

export type UseDebounceStateReturnedValue<TInitialValue> = [
  TInitialValue | undefined,
  React.Dispatch<React.SetStateAction<TInitialValue | undefined>>,
];
