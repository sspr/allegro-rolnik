import * as Styled from './RangeInput.styles';
import { RangeInputProps } from './RangeInput.types';

export const RangeInput = (props: RangeInputProps) => (
  <Styled.Container>
    <Styled.RangeInput placeholder={' '} name={props.label} id={props.label} {...props} />
    <Styled.Label htmlFor={props.label}>{props.label}</Styled.Label>
  </Styled.Container>
);
