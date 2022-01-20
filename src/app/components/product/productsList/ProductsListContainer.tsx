import { ProductsList } from './ProductsList';
import { useFetch } from 'hooks';
import { ProductResponse } from 'api/product/product.types';
import { ProductsListContianerProps } from './ProductsList.types';
import { useEffect } from 'react';
import { stringify } from 'querystring';

export const ProductsListContainer = ({ onDataFetch, productsUrlParams }: ProductsListContianerProps) => {
  const { data, isLoading, isError } = useFetch<ProductResponse>(`machines?${stringify(productsUrlParams)}`);

  useEffect(() => {
    onDataFetch(data?.meta.count);
  }, [data]);

  return <ProductsList productsList={data?.data} isLoading={isLoading} isError={isError} />;
};
