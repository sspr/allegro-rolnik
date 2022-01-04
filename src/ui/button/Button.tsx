import * as Styled from './Button.styles';
import { ButtonProps } from './Button.types';

export const Button = ({ children, type }: ButtonProps) => <Styled.Button type={type}>{children}</Styled.Button>;
