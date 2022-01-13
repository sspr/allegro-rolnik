export type FetchReturnedValue<Type> = {
  isLoading: boolean;
  isError: boolean;
  data: Type | undefined;
};
