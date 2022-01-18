import { useContext } from 'react';
import { UrlContext } from 'context/url/urlContext/UrlContext';
import { UrlContextValuesTypes } from 'context/url/urlContext/UrlContext.types';

export const useUrl = (): UrlContextValuesTypes => {
  const context = useContext(UrlContext);

  if (context === undefined) {
    throw new Error('useUrl must be used withing UrlContextController');
  }

  return {
    ...context,
  };
};
