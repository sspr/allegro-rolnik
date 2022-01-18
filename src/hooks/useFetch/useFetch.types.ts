export type QueryParams = {
  page?: number;
  perPage?: number;
};

export type MetaData = {
  count: number;
};

export type FetchResult<Type> = {
  isLoading: boolean;
  isError: boolean;
  data: Type | undefined;
  meta: MetaData | undefined;
};
