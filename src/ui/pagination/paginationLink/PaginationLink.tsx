import * as Styled from './PaginationLink.styles';
import { PaginationLinkProps } from './PaginationLink.types';

export const PaginationLink = ({ isActive = false, number, onClick }: PaginationLinkProps) => (
  <Styled.PaginationLink
    onClick={() => {
      if (!isActive) {
        onClick();
      }
    }}
    className={isActive ? 'active' : ''}
  >
    {number}
  </Styled.PaginationLink>
);
