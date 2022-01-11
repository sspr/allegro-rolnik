import { useLocale } from 'hooks';
import * as Styled from './ProductItem.styles';
import { ProductItemProps } from 'api/product/product.types';
import { AppLocale } from 'context/locale/appLocale.enum';

export const SingleProduct = ({ productDetails }: ProductItemProps) => {
  const { locale, formatMessage, formatNumber } = useLocale();

  const price = formatNumber(productDetails.price, {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <Styled.ProductItem>
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
            <Styled.PriceInteger>
              {locale === AppLocale.en ? price.substring(0, price.length - 2) : price.substring(0, price.length - 5)}
            </Styled.PriceInteger>
            <Styled.PriceDecimal>
              {locale === AppLocale.en ? price.substring(price.length - 2) : price.substring(price.length - 5)}
            </Styled.PriceDecimal>
          </div>
        </div>
      </Styled.Container>
    </Styled.ProductItem>
  );
};
