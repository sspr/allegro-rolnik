import { AppLocale } from 'context/locale/appLocale.enum';

export type LocaleButtonProps = {
  text: AppLocale;
  isActive: boolean;
  onClick: () => void;
};
