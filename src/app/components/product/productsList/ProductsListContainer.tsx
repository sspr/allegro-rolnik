import { ProductsList } from './ProductsList';
import { useFetch } from 'hooks';
import { Product } from 'api/product/product.types';

export const ProductsListContainer = () => {
  const { data, isLoading, isError } = useFetch<Product[]>(process.env.REACT_APP_API_URL);

  return <ProductsList productsList={data} isProductsLoading={isLoading} isError={isError} />;
};
