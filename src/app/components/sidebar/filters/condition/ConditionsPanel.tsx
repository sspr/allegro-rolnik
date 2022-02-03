import { ProductCondition } from 'api/product/product.types';
import { useIntl } from 'react-intl';
import { MOCK_CONDITION } from 'tests/mock/conditionMock';
import { Checkbox } from 'ui';
import { LabelWithCount } from 'ui';
import { ConditionsPanelProps } from './ConditionsPanel.types';

export const ConditionsPanel = ({ onConditionChange, activeConditions }: ConditionsPanelProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <h3>{formatMessage({ id: 'filters.condition' })}</h3>
      {Object.values(ProductCondition).map((condition, index) => (
        <LabelWithCount key={condition} count={MOCK_CONDITION[index].count}>
          <Checkbox
            isChecked={activeConditions?.includes(condition)}
            label={formatMessage({ id: `singleProduct.condition.${condition}` })}
            onClick={() => {
              onConditionChange(condition);
            }}
          />
        </LabelWithCount>
      ))}
    </>
  );
};
