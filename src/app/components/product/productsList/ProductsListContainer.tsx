import { ProductsList } from './ProductsList';
import { useFetch, useUrl } from 'hooks';
import { Product } from 'api/product/product.types';
import { ProductsListContianerProps } from './ProductsListContainer.types';
import { useEffect } from 'react';

export const ProductsListContainer = ({ setProductsCount }: ProductsListContianerProps) => {
  const { queryParams } = useUrl();

  const { data, isLoading, isError, meta } = useFetch<Product[]>(process.env.REACT_APP_API_URL, queryParams);

  useEffect(() => {
    setProductsCount(meta?.count ?? undefined);
  }, [meta]);

  return <ProductsList productsList={data} isLoading={isLoading} isError={isError} />;
};
