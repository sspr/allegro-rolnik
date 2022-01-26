import * as Styled from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = (props: React.ComponentPropsWithoutRef<'input'> & CheckboxProps) => (
  <Styled.Label htmlFor={props.label}>
    {props.label}
    <Styled.Input type="checkbox" id={props.label} name={props.label} {...props} />
    <Styled.Checkmark data-testid="checkmark" className={props.isChecked ? 'checked' : ''} />
  </Styled.Label>
);
