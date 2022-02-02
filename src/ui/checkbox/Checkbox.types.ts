export type CheckboxProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
  isChecked: boolean | undefined;
};
