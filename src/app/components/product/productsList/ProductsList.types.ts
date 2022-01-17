import { Product } from 'api/product/product.types';

export type ProductsListProps = {
  productsList: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
};