import { useLocale } from 'hooks';
import * as Styled from './SingleProduct.styles';
import { SingleProductProps } from './SingleProduct.types';

export const SingleProduct = ({ productDetails }: SingleProductProps) => {
  const { formatMessage } = useLocale();

  const priceIntiger = Math.trunc(productDetails.price).toLocaleString('pl-PL');
  const priceDecimal = (productDetails.price * 100 - Math.trunc(productDetails.price) * 100).toLocaleString('pl-PL', {
    minimumIntegerDigits: 2,
  });

  return (
    <Styled.SingleProduct>
      <Styled.Container>
        <Styled.Photo>
          <Styled.Image src={productDetails.photo} alt={productDetails.name} />
        </Styled.Photo>
        <div>
          <Styled.ProductName>{productDetails.name}</Styled.ProductName>
          <div>
            <Styled.ConditionLabel>{formatMessage({ id: 'singleProduct.condition' })}:</Styled.ConditionLabel>{' '}
            <Styled.ConditionText>{productDetails.condition}</Styled.ConditionText>
          </div>
          <div>
            <Styled.PriceIntiger>{priceIntiger},</Styled.PriceIntiger>
            <Styled.PriceDecimal>{priceDecimal} zł</Styled.PriceDecimal>
          </div>
        </div>
      </Styled.Container>
    </Styled.SingleProduct>
  );
};
