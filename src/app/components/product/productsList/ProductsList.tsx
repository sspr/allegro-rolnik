import { SingleProduct } from '../productItem/ProductItem';
import { PRODUCTS_MOCK } from './mock';
import * as Styled from './ProductsList.style';

export const ProductsList = () => (
  <Styled.ProductsList>
    {PRODUCTS_MOCK.map((product) => (
      <SingleProduct key={product.id} productDetails={product} />
    ))}
  </Styled.ProductsList>
);
