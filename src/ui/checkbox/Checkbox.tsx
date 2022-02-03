import * as Styled from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = (props: CheckboxProps) => {
  return (
    <Styled.Label htmlFor={props.name ?? props.label}>
      {props.label}
      <Styled.Input type="checkbox" id={props.name ?? props.label} name={props.name ?? props.label} {...props} />
      <Styled.Checkmark data-testid="checkmark" className={props.isChecked ? 'checked' : ''} />
    </Styled.Label>
  );
};
