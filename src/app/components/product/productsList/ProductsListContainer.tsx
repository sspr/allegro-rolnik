import { ProductsList } from './ProductsList';
import { useFetch } from 'hooks';
import { ProductResponse } from 'api/product/product.types';
import { ProductsListContainerProps } from './ProductsList.types';
import { useEffect } from 'react';
import { stringify } from 'querystring';
import { createGetProductsUrl } from 'api/product/product';

export const ProductsListContainer = ({ onDataFetch, productsUrlParams }: ProductsListContainerProps) => {
  const { data, isLoading, isError } = useFetch<ProductResponse>(`machines?${createGetProductsUrl(productsUrlParams)}`);

  useEffect(() => {
    onDataFetch(data?.meta.count);
  }, [data]);

  return <ProductsList productsList={data?.data} isLoading={isLoading} isError={isError} />;
};
