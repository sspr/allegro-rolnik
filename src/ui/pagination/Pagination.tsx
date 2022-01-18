import * as Styled from './Pagination.styles';
import { PaginationProps } from './Pagination.types';
import arrowRight from 'assets/images/arrowRight.svg';
import { useUrl } from 'hooks';
import { PaginationLink } from './paginationLink/PaginationLink';
import { useIntl } from 'react-intl';

export const Pagination = ({ productsCount }: PaginationProps) => {
  const { formatMessage } = useIntl();
  const { queryParams, updateQueryParams } = useUrl();

  const cards: number[] = [];
  if (productsCount) {
    for (let i = 1; i < productsCount / 15 + 1; i++) {
      cards.push(i);
    }
  }

  const currentPage = Number(queryParams?.page) || 1;

  return (
    <Styled.Pagination>
      {currentPage > 1 && (
        <Styled.Previous
          onClick={() => {
            updateQueryParams({ page: currentPage - 1 });
          }}
        >
          <img src={arrowRight} alt={formatMessage({ id: 'pagination.arrowLeftAlt' })} />{' '}
          {formatMessage({ id: 'pagination.previous' })}
        </Styled.Previous>
      )}
      <span>
        {cards && currentPage > 4 && (
          <>
            <PaginationLink currentPage={currentPage} card={1} />
            <Styled.Label>...</Styled.Label>
          </>
        )}
        {cards &&
          currentPage <= 3 &&
          cards.slice(0, 5).map((card) => <PaginationLink key={card} currentPage={currentPage} card={card} />)}
        {cards &&
          currentPage === 4 &&
          cards.slice(0, 6).map((card) => <PaginationLink key={card} currentPage={currentPage} card={card} />)}
        {cards &&
          currentPage > 4 &&
          currentPage <= cards.length - 2 &&
          cards
            .slice(currentPage - 3, currentPage + 2)
            .map((card) => <PaginationLink key={card} currentPage={currentPage} card={card} />)}
        {cards &&
          currentPage > cards.length - 2 &&
          cards.slice(-5).map((card) => <PaginationLink key={card} currentPage={currentPage} card={card} />)}
        <Styled.Label>{formatMessage({ id: 'pagination.of' })}</Styled.Label>
        <PaginationLink currentPage={currentPage} card={cards.length} />
      </span>
      {currentPage < cards.length && (
        <Styled.Next
          onClick={() => {
            updateQueryParams({ page: currentPage + 1 });
          }}
        >
          {formatMessage({ id: 'pagination.next' })}{' '}
          <img src={arrowRight} alt={formatMessage({ id: 'pagination.arrowRightAlt' })} />
        </Styled.Next>
      )}
    </Styled.Pagination>
  );
};
