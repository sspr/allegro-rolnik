import * as Styled from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = (props: React.ComponentPropsWithoutRef<'input'> & CheckboxProps) => {
  const name = `${props.label}_${Math.random().toString(36).substring(2, 9)}`;

  return (
    <Styled.Label htmlFor={name}>
      {props.label}
      <Styled.Input type="checkbox" id={name} name={name} {...props} />
      <Styled.Checkmark data-testid="checkmark" className={props.isChecked ? 'checked' : ''} />
    </Styled.Label>
  );
};
