import { render } from 'tests';
import { MOCK_CONDITION } from 'tests/mock/conditionMock';
import { Condition } from './Condition';

describe('Condition component', () => {
  it('renders conditions correctly', async () => {
    const { getByText } = render(<Condition onCheckboxClick={() => {}} />);

    MOCK_CONDITION.forEach((condition) => {
      expect(getByText(condition.label)).toBeInTheDocument();
      expect(getByText(condition.count)).toBeInTheDocument();
    });
  });
});
