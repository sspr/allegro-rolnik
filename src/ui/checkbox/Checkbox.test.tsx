import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { Checkbox } from './Checkbox';

describe('Checkbox component', () => {
  it('renders checkbox correctly', async () => {
    const { getByText, getByTestId } = render(<Checkbox label={'new'} isChecked={false} />);

    expect(getByText('new')).toBeInTheDocument();
    expect(getByTestId('checkmark')).toHaveStyle({ border: `1px solid ${theme.color.border.grey}` });
  });

  it('renders checkbox correctly when active', () => {
    const { getByText, getByTestId } = render(<Checkbox label={'new'} isChecked={true} />);

    expect(getByText('new')).toBeInTheDocument();
    expect(getByTestId('checkmark')).toHaveStyle({ border: `2px solid ${theme.color.primary}` });
  });
});
