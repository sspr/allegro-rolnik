import { LocaleButtonProps } from './LocaleButton.types';
import * as Styled from './LocaleButton.styles';
import { AppLocale } from '../../../context/locale/appLocale.enum';

export const LocaleButton = ({ localeButtonValue, hasBorder }: LocaleButtonProps) => {
  return (
    <>
      <Styled.LocaleButton className={localeButtonValue === AppLocale.en ? 'active' : 'not-active'}>
        {localeButtonValue}
      </Styled.LocaleButton>
      {hasBorder ? ' | ' : null}
    </>
  );
};
