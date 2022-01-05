import { LocaleButtonProps } from './LocaleButton.types';
import * as Styled from './LocaleButton.styles';
import { useLocale } from 'hooks';

export const LocaleButton = ({ text, onClick }: LocaleButtonProps) => {
  const { locale } = useLocale();

  return (
    <>
      <Styled.LocaleButton onClick={onClick} className={text === locale ? 'active' : 'not-active'}>
        {text}
      </Styled.LocaleButton>
    </>
  );
};
