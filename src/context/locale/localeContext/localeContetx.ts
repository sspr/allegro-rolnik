import { createContext } from 'react';
import { LocaleContextValuesTypes } from './localeContetx.types';

export const localeContext = createContext<LocaleContextValuesTypes | undefined>(undefined);
