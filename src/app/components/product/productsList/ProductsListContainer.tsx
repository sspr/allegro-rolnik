import { ProductsList } from './ProductsList';
import { useFetch } from 'hooks';
import { ProductResponse } from 'api/product/product.types';
import { ProductsListContianerProps } from './ProductsList.types';
import { createGetProductsUrl } from 'api/product/product';
import { useEffect } from 'react';

export const ProductsListContainer = ({ onDataFetch, productsUrlParams }: ProductsListContianerProps) => {
  const { data, isLoading, isError } = useFetch<ProductResponse>(createGetProductsUrl(productsUrlParams));

  useEffect(() => {
    onDataFetch(data?.meta.count);
  }, [data]);

  return <ProductsList productsList={data?.data} isLoading={isLoading} isError={isError} />;
};
