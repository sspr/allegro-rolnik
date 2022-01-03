import { useContext } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { localeContext } from '../context/locale/localeContext/localeContext';
import { LocaleContextValuesTypes } from '../context/locale/localeContext/localeContext.types';

export const useLocale = (): IntlShape & LocaleContextValuesTypes => {
  const intl = useIntl();
  const context = useContext(localeContext);

  return {
    ...intl,
    ...context,
  };
};
