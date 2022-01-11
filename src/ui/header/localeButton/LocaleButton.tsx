import { LocaleButtonProps } from './LocaleButton.types';
import * as Styled from './LocaleButton.styles';

export const LocaleButton = ({ text, isActive, onClick }: LocaleButtonProps) => {
  return (
    <Styled.LocaleButton onClick={onClick} className={isActive ? 'active' : 'not-active'}>
      {text}
    </Styled.LocaleButton>
  );
};
