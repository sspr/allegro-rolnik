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
        onSearchLabelClick={() => {}}
        activeFilters={{ condition: [ProductCondition.NEW], minPrice: 5, maxPrice: 10, search: 'sidecar 3,5t' }}
      />,
    );

    expect(getAllByText('new')).toHaveLength(2);
    expect(getByText('price from:')).toBeInTheDocument();
    expect(getByText('price from:')).toHaveStyle({ color: theme.color.text.grey });
    expect(getByText('PLN 5')).toBeInTheDocument();
    expect(getByText('price to:')).toBeInTheDocument();
    expect(getByText('price to:')).toHaveStyle({ color: theme.color.text.grey });
    expect(getByText('PLN 10')).toBeInTheDocument();
    expect(getByText('looking for:')).toBeInTheDocument();
    expect(getByText('looking for:')).toHaveStyle({ color: theme.color.text.grey });
    expect(getByText('sidecar 3,5t')).toBeInTheDocument();
  });
});
