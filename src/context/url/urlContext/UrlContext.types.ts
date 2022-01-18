import { QueryParams } from 'hooks/useFetch/useFetch.types';

export type UrlContextValuesTypes = {
  queryParams: QueryParams | undefined;
  updateQueryParams: (params: QueryParams) => void;
};
