import * as Styled from './LabelWithButton.styles';
import { LabelWithButtonProps } from './LabelWithButton.types';
import x from 'assets/images/x.svg';

export const LabelWithButton = ({ text, prefix, onClick }: LabelWithButtonProps) => (
  <Styled.LabelWithButton>
    <Styled.CloseButton onClick={onClick}>
      <img src={x} alt="close x bauuton" />
    </Styled.CloseButton>
    <Styled.Label>
      {prefix && <Styled.Prefix>{`${prefix}: `}</Styled.Prefix>}
      <span>{text}</span>
    </Styled.Label>
  </Styled.LabelWithButton>
);
