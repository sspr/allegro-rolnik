import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { LabelWithButton } from './LabelWithButton';

describe('LabelWithButton component', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<LabelWithButton text={'new'} prefix={'condtion'} onClick={() => {}} />);

    expect(getByText('new')).toBeInTheDocument();
    expect(getByText('condtion:')).toBeInTheDocument();
    expect(getByText('condtion:')).toHaveStyle({ color: theme.color.text.grey });
  });

  const mockFn = jest.fn();

  it('handles clicks correctly', () => {
    const { getByText, getByRole } = render(<LabelWithButton text={'new'} prefix={'condtion'} onClick={mockFn} />);

    getByText('new').click();
    getByRole('button').click();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
