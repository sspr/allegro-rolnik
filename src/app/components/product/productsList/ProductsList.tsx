import { SingleProduct } from '../productItem/ProductItem';
import { PRODUCTS_MOCK } from './productsMock';
import * as Styled from './ProductsList.style';

export const ProductsList = () => (
  <Styled.ProductsList>
    {PRODUCTS_MOCK.map((product) => (
      <SingleProduct key={product.id} productDetails={product} />
    ))}
  </Styled.ProductsList>
);
