import { LocaleButtonProps } from './LocaleButton.types';
import * as Styled from './LocaleButton.styles';
import { useLocale } from 'hooks';

export const LocaleButton = ({ text, hasBorder }: LocaleButtonProps) => {
  const { locale, setLocale } = useLocale();

  const handleChangeLanguage = () => {
    if (locale !== text) {
      setLocale(text);
    }
  };

  return (
    <>
      <Styled.LocaleButton onClick={handleChangeLanguage} className={text === locale ? 'active' : 'not-active'}>
        {text}
      </Styled.LocaleButton>
      {hasBorder ? ' | ' : null}
    </>
  );
};
