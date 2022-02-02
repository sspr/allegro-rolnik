import { render } from 'tests';
import { MOCK_CONDITION } from 'tests/mock/conditionMock';
import { ConditionsPanel } from './ConditionsPanel';

describe('Condition component', () => {
  it('renders conditions correctly', async () => {
    const { getByText } = render(<ConditionsPanel onConditionChange={() => {}} />);

    MOCK_CONDITION.forEach((condition) => {
      expect(getByText(condition.label)).toBeInTheDocument();
      expect(getByText(condition.count)).toBeInTheDocument();
    });
  });
});
