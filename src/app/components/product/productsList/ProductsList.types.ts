import { Product } from 'api/product/product.types';

export type ProductsListProps = {
  productsList: Product[] | undefined;
  isProductsLoading: boolean;
  isError: boolean;
};
