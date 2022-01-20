export type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageClick: (page: number) => void;
};
