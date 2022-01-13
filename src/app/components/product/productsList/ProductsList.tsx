import { SingleProduct } from '../productItem/ProductItem';
import * as Styled from './ProductsList.style';
import { ProductsListProps } from './ProductsList.types';

export const ProductsList = ({ productsList }: ProductsListProps) => (
  <Styled.ProductsList>
    {productsList.map((product) => (
      <SingleProduct key={product.id} productDetails={product} />
    ))}
  </Styled.ProductsList>
);
