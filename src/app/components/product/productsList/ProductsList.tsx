import { SingleProduct } from '../singleProduct/SingleProduct';
import { DUMMY_DATA } from './dummyData';
import * as Styled from './ProductsList.style';

export const ProductsList = () => (
  <Styled.ProductsList>
    {DUMMY_DATA.map((product) => (
      <SingleProduct key={product.id} productDetails={product} />
    ))}
  </Styled.ProductsList>
);
