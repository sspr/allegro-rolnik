import { GetProductsUrlParams } from './product.types';

export const defaultProductParams: GetProductsUrlParams = {
  page: 1,
  perPage: 10,
  category: [],
  condition: [],
  minPrice: undefined,
  maxPrice: undefined,
};
