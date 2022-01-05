import { AppLocale } from 'context/locale/appLocale.enum';

export type LocaleButtonProps = {
  text: AppLocale;
  onClick: () => void;
};
