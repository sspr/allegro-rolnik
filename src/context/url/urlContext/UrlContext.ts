import { createContext } from 'react';
import { UrlContextValuesTypes } from './UrlContext.types';

export const UrlContext = createContext<UrlContextValuesTypes | undefined>(undefined);
