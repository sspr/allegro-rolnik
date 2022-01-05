import * as Styled from './Button.styles';

export const Button = (props: React.ComponentPropsWithoutRef<'button'>) => (
  <Styled.Button {...props}>{props.children}</Styled.Button>
);
