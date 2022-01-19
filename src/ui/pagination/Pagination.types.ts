import { GetProductsUrlParams } from 'api/product/product.types';

export type PaginationProps = {
  pageCount: number;
  currentPage: number;
  onPageClick: (page: GetProductsUrlParams) => void;
};
