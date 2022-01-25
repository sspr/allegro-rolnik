import { GetProductsUrlParams } from 'api/product/product.types';

export type MainProps = {
  isScreenMobile: boolean;
  onFilterClick: () => void;
  productsParams: GetProductsUrlParams;
  onPageClick: (page: number) => void;
};
