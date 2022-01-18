import { useUrl } from 'hooks';
import * as Styled from './PaginationLink.styles';
import { PaginationLinkProps } from './PaginationLink.types';

export const PaginationLink = ({ currentPage, card }: PaginationLinkProps) => {
  const { updateQueryParams } = useUrl();

  return (
    <Styled.PaginationLink
      onClick={() => {
        if (currentPage !== card) {
          updateQueryParams({ page: card });
        }
      }}
      className={currentPage === card ? 'active' : ''}
    >
      {card}
    </Styled.PaginationLink>
  );
};
