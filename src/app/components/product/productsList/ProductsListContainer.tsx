import { ProductsList } from './ProductsList';
import { useFetch } from 'api/product/useFetch/useFetch';
import * as Styled from './ProductsList.style';
import { useIntl } from 'react-intl';
import { Product } from 'api/product/product.types';

export const ProductsListContainer = () => {
  const { isLoading, isError, data } = useFetch<Product[]>('http://localhost:4321/machines');
  const { formatMessage } = useIntl();

  return (
    <>
      {isLoading && <Styled.Message>{formatMessage({ id: 'productsList.loadingData' })}</Styled.Message>}
      {data && !isError && <ProductsList productsList={data} />}
      {isError && <Styled.Message>{formatMessage({ id: 'productsList.errorMessage' })}</Styled.Message>}
    </>
  );
};
