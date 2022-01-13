import { render, screen, within } from '@testing-library/react';
import { AppLocale } from 'context/locale/appLocale.enum';
import { AppProviders } from 'providers/AppProviders';
import { Header } from 'ui/header/Header';
import { PRODUCTS_MOCK } from '../productsList/productsMock';
import { ProductItem } from './ProductItem';

describe('ProductItem component', () => {
  it('renders name of product', () => {
    render(
      <AppProviders>
        <ProductItem productDetails={PRODUCTS_MOCK[0]} />
      </AppProviders>,
    );

    const productName = screen.getByText(PRODUCTS_MOCK[0].name);

    expect(productName).toBeInTheDocument();
  });

  it('renders price correctly in English', () => {
    render(
      <AppProviders>
        <Header />
        <ProductItem productDetails={PRODUCTS_MOCK[0]} />
      </AppProviders>,
    );

    const localeButtonEn = screen.getByText(AppLocale.en);
    localeButtonEn.click();
    const priceElement = screen.getByTestId('price');
    const currencyEn = within(priceElement).getByText(/PLN/);
    const dot = within(priceElement).getByText(/\./);
    const priceDecimal = within(priceElement).getByText(/^\d{2}$/);

    expect(currencyEn).toBeInTheDocument();
    expect(dot).toBeInTheDocument();
    expect(priceDecimal).toBeInTheDocument();
  });

  it('renders price correctly in Polish', () => {
    render(
      <AppProviders>
        <Header />
        <ProductItem productDetails={PRODUCTS_MOCK[0]} />
      </AppProviders>,
    );

    const localeButtonPl = screen.getByText(AppLocale.pl);
    localeButtonPl.click();
    const priceElement = screen.getByTestId('price');
    const priceDecimalWithCurrencyPl = within(priceElement).getByText(/^\d{2} zł$/);
    const comma = within(priceElement).getByText(/,/);

    expect(priceDecimalWithCurrencyPl).toBeInTheDocument();
    expect(comma).toBeInTheDocument();
  });
});
