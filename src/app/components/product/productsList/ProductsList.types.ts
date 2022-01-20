import { GetProductsUrlParams, Product } from 'api/product/product.types';

export type ProductsListProps = {
  productsList: Product[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

export type ProductsListContainerProps = {
  productsUrlParams: GetProductsUrlParams;
  onDataFetch: (productsCount: number | undefined) => void;
};
