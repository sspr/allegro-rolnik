import { useIntl } from 'react-intl';
import { SingleProduct } from '../productItem/ProductItem';
import * as Styled from './ProductsList.style';
import { ProductsListProps } from './ProductsList.types';

export const ProductsList = ({ productsList, isLoading, isError }: ProductsListProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      {isLoading && <Styled.Spinner></Styled.Spinner>}
      {productsList && !isError && (
        <Styled.ProductsList>
          {productsList.map((product) => (
            <SingleProduct key={product.id} productDetails={product} />
          ))}
        </Styled.ProductsList>
      )}
      {isError && <Styled.Message>{formatMessage({ id: 'productsList.errorMessage' })}</Styled.Message>}
    </>
  );
};
