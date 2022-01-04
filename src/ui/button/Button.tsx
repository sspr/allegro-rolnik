import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children, type }: ButtonProps) => {
  return <Styled.Button type={type}>{children}</Styled.Button>;
};
