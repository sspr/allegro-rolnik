import { Price } from './Price';
import { render } from 'tests';

describe('Price component', () => {
  it('renders price range inputs correctly', () => {
    const { getByText, queryByTestId } = render(
      <Price onInputChange={() => {}} minPrice={undefined} maxPrice={undefined} />,
    );

    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('from')).toBeInTheDocument();
    expect(getByText('to')).toBeInTheDocument();
    expect(queryByTestId('checkbox')).not.toBeInTheDocument();
  });

  it('renders price in input, and checkbox', () => {
    const { getByTestId, getByDisplayValue } = render(
      <Price onInputChange={() => {}} minPrice={123} maxPrice={undefined} />,
    );

    expect(getByDisplayValue('123')).toBeInTheDocument();
    expect(getByTestId('checkbox')).toBeInTheDocument();
  });
});
