import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { LabelWithCount } from './LabelWithCount';

describe('LabelWithCount component', () => {
  it('renders label and count', () => {
    const { getByText } = render(<LabelWithCount count={10}>test</LabelWithCount>);

    expect(getByText('test')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('10')).toHaveStyle({ color: theme.color.text.grey });
  });
});
