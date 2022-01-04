import * as Styled from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({ placeholder }: InputProps) => {
  return <Styled.Input placeholder={placeholder} />;
};
