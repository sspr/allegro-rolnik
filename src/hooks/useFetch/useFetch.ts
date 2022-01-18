import { useEffect, useState } from 'react';
import { FetchResult, MetaData, QueryParams } from './useFetch.types';

export const useFetch = <TResponse>(url: string | undefined, queryParams?: QueryParams): FetchResult<TResponse> => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TResponse | undefined>(undefined);
  const [meta, setMeta] = useState<MetaData | undefined>(undefined);
  const isLoading = !data && !isError;

  useEffect(() => {
    const getData = async () => {
      try {
        if (!url) {
          throw new Error('Url is undefined');
        }
        const fetchUrl = new URL(url);
        if (queryParams) {
          Object.entries(queryParams).forEach((queryParam) =>
            fetchUrl.searchParams.append(queryParam[0], String(queryParam[1])),
          );
        }
        const response = await fetch(fetchUrl.toString());
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setData(data.data);
        setMeta(data.meta);
      } catch (error) {
        setIsError(true);
      }
    };

    getData();

    return () => {
      setData(undefined);
      setIsError(false);
    };
  }, [url, queryParams]);

  return { isLoading, isError, data, meta };
};
