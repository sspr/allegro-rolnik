import { RangeInput } from './RangeInput';
import { render } from 'tests';

describe('RangeInput component', () => {
  it('renders range input correctly', () => {
    const { getByText, getByPlaceholderText } = render(<RangeInput placeholder="input" label="from" />);

    expect(getByText('from')).toBeInTheDocument();
    expect(getByPlaceholderText('input')).toBeInTheDocument();
  });
});
