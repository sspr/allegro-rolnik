import { render } from 'tests';
import { within } from '@testing-library/react';
import { Header } from 'ui/header/Header';
import { AppLocale } from 'context/locale/appLocale.enum';
import { ProductItem } from './ProductItem';
import { PRODUCTS_MOCK } from 'tests/mock/productsMock';

describe('ProductItem component', () => {
  it('renders name of product', () => {
    const { getByText } = render(<ProductItem productDetails={PRODUCTS_MOCK[0]} />);

    expect(getByText(PRODUCTS_MOCK[0].name)).toBeInTheDocument();
  });

  it('renders price correctly in English', () => {
    const { getByTestId } = render(
      <>
        <Header />
        <ProductItem productDetails={PRODUCTS_MOCK[0]} />
      </>,
    );

    const priceElement = getByTestId('price');

    expect(within(priceElement).getByText(/PLN/)).toBeInTheDocument();
    expect(within(priceElement).getByText(/\./)).toBeInTheDocument();
    expect(within(priceElement).getByText(/^\d{2}$/)).toBeInTheDocument();
  });

  it('renders price correctly in Polish', () => {
    const { getByText, getByTestId } = render(
      <>
        <Header />
        <ProductItem productDetails={PRODUCTS_MOCK[0]} />
      </>,
    );

    getByText(AppLocale.pl).click();

    const priceElement = getByTestId('price');

    expect(within(priceElement).getByText(/^\d{2} zł$/)).toBeInTheDocument();
    expect(within(priceElement).getByText(/,/)).toBeInTheDocument();
  });
});
