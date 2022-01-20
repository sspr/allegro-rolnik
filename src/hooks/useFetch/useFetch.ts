import { useEffect, useState } from 'react';
import { FetchResult } from './useFetch.types';

export const useFetch = <TResponse>(url: string): FetchResult<TResponse> => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<TResponse | undefined>(undefined);
  const isLoading = !data && !isError;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}${url}`);
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        setIsError(true);
      }
    };

    getData();

    return () => {
      setData(undefined);
      setIsError(false);
    };
  }, [url]);

  return { isLoading, isError, data };
};
