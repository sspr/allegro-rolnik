import { useContext } from 'react';
import { UrlParamsContextValuesTypes } from 'context/urlParams/urlParamsContext/UrlParamsContext.types';
import { UrlParamsContext } from 'context/urlParams/urlParamsContext/UrlParamsContext';
import { UrlParams } from 'context/urlParams/defaultUrlParams.types';

export const useUrlParams = (): UrlParamsContextValuesTypes<UrlParams> => {
  const context = useContext(UrlParamsContext);

  if (context === undefined) {
    throw new Error('useProductsUrlParams must be used withing ProductsUrlParamsContextController');
  }

  return {
    ...context,
  };
};
