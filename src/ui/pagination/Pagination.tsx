import * as Styled from './Pagination.styles';
import { PaginationProps } from './Pagination.types';
import arrowRight from 'assets/images/arrowRight.svg';
import { PaginationLink } from './paginationLink/PaginationLink';
import { useIntl } from 'react-intl';

export const Pagination = ({ pageCount, currentPage, onPageClick }: PaginationProps) => {
  const { formatMessage } = useIntl();

  const pages: number[] = Array(pageCount)
    .fill(undefined)
    .map((_, index) => index + 1);

  return (
    <Styled.Pagination>
      {currentPage > 1 && (
        <Styled.Previous
          onClick={() => {
            onPageClick(currentPage - 1);
          }}
        >
          <img src={arrowRight} alt={formatMessage({ id: 'pagination.arrowLeftAlt' })} />{' '}
          {formatMessage({ id: 'pagination.previous' })}
        </Styled.Previous>
      )}
      <span>
        {pages.length > 6 && currentPage > 4 && (
          <>
            <PaginationLink
              number={1}
              onClick={() => {
                onPageClick(1);
              }}
            />
            <Styled.Label>...</Styled.Label>
          </>
        )}
        {pages.length <= 6 &&
          pages.map((page) => (
            <PaginationLink
              key={page}
              isActive={page === currentPage}
              number={page}
              onClick={() => {
                onPageClick(page);
              }}
            />
          ))}
        {pages.length > 6 &&
          currentPage <= 3 &&
          pages.slice(0, 5).map((page) => (
            <PaginationLink
              key={page}
              isActive={page === currentPage}
              number={page}
              onClick={() => {
                onPageClick(page);
              }}
            />
          ))}
        {pages.length > 6 &&
          currentPage === 4 &&
          pages.slice(0, 6).map((page) => (
            <PaginationLink
              key={page}
              isActive={page === currentPage}
              number={page}
              onClick={() => {
                onPageClick(page);
              }}
            />
          ))}
        {pages.length > 6 &&
          currentPage > 4 &&
          currentPage <= pages.length - 2 &&
          pages.slice(currentPage - 3, currentPage + 2).map((page) => (
            <PaginationLink
              key={page}
              isActive={page === currentPage}
              number={page}
              onClick={() => {
                onPageClick(page);
              }}
            />
          ))}
        {pages.length > 6 &&
          currentPage > pages.length - 2 &&
          pages.slice(-5).map((page) => (
            <PaginationLink
              key={page}
              isActive={page === currentPage}
              number={page}
              onClick={() => {
                onPageClick(page);
              }}
            />
          ))}
        <Styled.Label>{formatMessage({ id: 'pagination.of' })}</Styled.Label>
        <PaginationLink
          number={pages.length}
          onClick={() => {
            onPageClick(pages.length);
          }}
        />
      </span>
      {currentPage < pages.length && (
        <Styled.Next
          onClick={() => {
            onPageClick(currentPage + 1);
          }}
        >
          {formatMessage({ id: 'pagination.next' })}{' '}
          <img src={arrowRight} alt={formatMessage({ id: 'pagination.arrowRightAlt' })} />
        </Styled.Next>
      )}
    </Styled.Pagination>
  );
};
