import * as Styled from './SingleProduct.styles';

const DUMMY_DATA = {
  id: '10027784131',
  name: 'Ciągnik Farmtrac 675 DTn farmtrak farmtrack',
  condition: 'Nowy',
  price: 118000,
  category: 'tractor',
  photo:
    'https://a.allegroimg.com/s360/11b3c2/f4ef4d274cbba4e86bf3fd1a277d/Ciagnik-Farmtrac-675-DTn-farmtrak-farmtrack',
};

export const SingleProduct = () => {
  const priceIntiger = Math.trunc(DUMMY_DATA.price).toLocaleString('pl-PL');
  const priceDecimal = (DUMMY_DATA.price * 100 - Math.trunc(DUMMY_DATA.price) * 100).toLocaleString('pl-PL', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });

  return (
    <Styled.SingleProduct>
      <Styled.Container>
        <Styled.Photo>
          <Styled.Image src={DUMMY_DATA.photo} alt={DUMMY_DATA.name} />
        </Styled.Photo>
        <div>
          <Styled.ProductName>{DUMMY_DATA.name}</Styled.ProductName>
          <div>
            <Styled.ConditionLabel>stan:</Styled.ConditionLabel>{' '}
            <Styled.ConditionText>{DUMMY_DATA.condition}</Styled.ConditionText>
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
