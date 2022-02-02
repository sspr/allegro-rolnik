import { PricePanel } from './PricePanel';
import { render, fireEvent } from 'tests';

describe('Price component', () => {
  it('renders price range inputs correctly', () => {
    const { getByText, queryByTestId } = render(
      <PricePanel onInputChange={() => {}} minPrice={undefined} maxPrice={undefined} />,
    );

    expect(getByText('-')).toBeInTheDocument();
    expect(getByText('from')).toBeInTheDocument();
    expect(getByText('to')).toBeInTheDocument();
    expect(queryByTestId('checkbox')).not.toBeInTheDocument();
  });

  it('renders price value in input, and a checkbox, when one of range inputs has a value greater than 0', () => {
    const { getByTestId, getByDisplayValue } = render(
      <PricePanel onInputChange={() => {}} minPrice={123} maxPrice={undefined} />,
    );

    expect(getByDisplayValue('123')).toBeInTheDocument();
    expect(getByTestId('checkbox')).toBeInTheDocument();
  });

  const mockFn = jest.fn();

  it('fires callback correctly, when checkbox is clicked', () => {
    const { getByTestId } = render(<PricePanel onInputChange={mockFn} minPrice={123} maxPrice={undefined} />);

    getByTestId('checkbox').click();

    expect(mockFn).toHaveBeenCalled();
  });

  it('fires callback correctly, when value in input has been changed', () => {
    const { getByDisplayValue } = render(<PricePanel onInputChange={mockFn} minPrice={123} maxPrice={undefined} />);

    fireEvent.change(getByDisplayValue('123'), { target: { value: '456' } });

    setTimeout(() => {
      expect(mockFn).toHaveBeenCalled();
    }, 2000);
  });
});
