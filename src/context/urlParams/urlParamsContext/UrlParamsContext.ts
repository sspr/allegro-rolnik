import { UrlParams } from '../defaultUrlParams.types';
import { createContext } from 'react';
import { UrlParamsContextValuesTypes } from './UrlParamsContext.types';

export const UrlParamsContext = createContext<UrlParamsContextValuesTypes<UrlParams> | undefined>(undefined);
