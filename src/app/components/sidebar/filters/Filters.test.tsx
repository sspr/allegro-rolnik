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

  const mockFnOnConditionClick = jest.fn();
  const mockFnOnPriceChange = jest.fn();
  const mockFnOnSearchLabelClick = jest.fn();

  it('fires callbacks correctly, when buttons are clicked', () => {
    const { getByText, getAllByText } = render(
      <Filters
        onConditionClick={mockFnOnConditionClick}
        onPriceChange={mockFnOnPriceChange}
        onSearchLabelClick={mockFnOnSearchLabelClick}
        activeFilters={{
          condition: [ProductCondition.NEW, ProductCondition.USED],
          minPrice: 5,
          maxPrice: 10,
          search: 'nice looking tractor',
        }}
      />,
    );

    getAllByText('new')[0].click();
    getByText('price to:').click();
    getByText('looking for:').click();

    getAllByText('new')[0].closest('div')?.querySelector('button')?.click();
    getAllByText('used')[0].closest('div')?.querySelector('button')?.click();
    getByText('price to:').closest('div')?.querySelector('button')?.click();
    getByText('looking for:').closest('div')?.querySelector('button')?.click();

    expect(mockFnOnConditionClick).toHaveBeenCalledTimes(2);
    expect(mockFnOnPriceChange).toHaveBeenCalledTimes(1);
    expect(mockFnOnSearchLabelClick).toHaveBeenCalledTimes(1);
  });
});
