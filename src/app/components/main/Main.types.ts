import { GetProductsUrlParams } from 'api/product/product.types';

export type MainProps = {
  isScreenMobile: boolean;
  onFilterClick: () => void;
  productsQuery: GetProductsUrlParams;
  changeProductsQuery: (page: number) => void;
};
