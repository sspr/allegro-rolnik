import { UrlParams } from 'context/urlParams/defaultUrlParams.types';
import { useState } from 'react';
import { defaultUrlParams } from '../defaultUrlParams';
import { UrlParamsContext } from '../urlParamsContext/UrlParamsContext';
import { UrlParamsContextControllerProps } from './UrlParamsContextController.types';

export const UrlParamsContextController = ({ children }: UrlParamsContextControllerProps) => {
  const [urlParams, setUrlParams] = useState<UrlParams>(defaultUrlParams);

  const changeUrlParams = (params: UrlParams) => {
    setUrlParams((prevState) => {
      return { ...prevState, ...params };
    });
  };

  return <UrlParamsContext.Provider value={{ urlParams, changeUrlParams }}>{children}</UrlParamsContext.Provider>;
};
