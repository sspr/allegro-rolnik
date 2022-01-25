import { ReactNode } from 'react';

export type LabelWithCountProps = {
  count: number;
  children: ReactNode;
  onClick?: VoidFunction;
};
