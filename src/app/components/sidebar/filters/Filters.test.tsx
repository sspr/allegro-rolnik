import { ProductCondition } from 'api/product/product.types';
import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { Filters } from './Filters';

describe('Filters component', () => {
  it('renders filters labels correctly', () => {
    const { getByText, getAllByText } = render(
      <Filters
        onConditionClick={() => {}}
        onPriceChange={() => {}}
        activeFilters={{ condition: [ProductCondition.NEW], minPrice: 5, maxPrice: 10 }}
      />,
    );

    expect(getAllByText('new')).toHaveLength(2);
    expect(getByText('PLN 5')).toBeInTheDocument();
    expect(getByText('PLN 10')).toBeInTheDocument();
    expect(getByText('price from:')).toBeInTheDocument();
    expect(getByText('price to:')).toBeInTheDocument();
    expect(getByText('price from:')).toHaveStyle({ color: theme.color.text.grey });
    expect(getByText('price to:')).toHaveStyle({ color: theme.color.text.grey });
  });
});
