import { QueryParams } from 'hooks/useFetch/useFetch.types';
import { useState } from 'react';
import { UrlContext } from '../urlContext/UrlContext';
import { UrlContextControllerProps } from './UrlContextController.types';

export const UrlContextController = ({ children }: UrlContextControllerProps) => {
  const url = new URL(window.location.href);
  const defaultSearchParams = new URLSearchParams(url.search);

  const [queryParams, setQueryParams] = useState(Object.fromEntries(defaultSearchParams));

  const updateQueryParams = (params: QueryParams) => {
    const searchParams = new URLSearchParams(queryParams);
    for (const [key, value] of Object.entries(params)) {
      if (value < 0) {
        searchParams.delete(key);
      } else {
        searchParams.has(key) ? searchParams.set(key, String(value)) : searchParams.append(key, String(value));
      }
      setQueryParams(Object.fromEntries(searchParams));
      window.history.pushState(null, document.title, `?${searchParams.toString()}`);
    }
  };

  return <UrlContext.Provider value={{ queryParams, updateQueryParams }}>{children}</UrlContext.Provider>;
};
