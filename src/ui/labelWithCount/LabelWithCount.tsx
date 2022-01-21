import * as Styled from './LabelWithCount.styles';
import { LabelWithCountProps } from './LabelWithCount.types';

export const LabelWithCount = ({ children, count }: LabelWithCountProps) => {
  return (
    <Styled.LabelWithCount>
      <span>{children}</span>
      <Styled.Count>{count}</Styled.Count>
    </Styled.LabelWithCount>
  );
};
