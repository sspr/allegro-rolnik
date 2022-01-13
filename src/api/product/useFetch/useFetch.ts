import { useEffect, useState } from 'react';
import { FetchReturnedValue } from './useFetch.types';

export const useFetch = <Type>(url: string): FetchReturnedValue<Type> => {
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<Type | undefined>(undefined);
  const isLoading = !data && !isError;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(url);
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
  }, [url]);

  return { isLoading, isError, data };
};
