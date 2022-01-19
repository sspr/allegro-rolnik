export type FetchResult<Type> = {
  isLoading: boolean;
  isError: boolean;
  data: Type | undefined;
};
