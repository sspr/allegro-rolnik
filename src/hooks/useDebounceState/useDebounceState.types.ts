export type UseDebounceStateProps = {
  onDebounceChange: (value: number | undefined) => void;
  initialValue: number | undefined;
  debounceTime: number;
};

export type UseDebounceStateReturnedValue = [
  number | undefined,
  React.Dispatch<React.SetStateAction<number | undefined>>,
];
