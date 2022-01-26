import { useIntl } from 'react-intl';
import { MOCK_CONDITION } from 'tests/mock/conditionMock';
import { Checkbox } from 'ui';
import { LabelWithCount } from 'ui';
import { ConditionProps } from './Condition.types';

export const Condition = ({ onCheckboxClick, activeCheckbox }: ConditionProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <h3>{formatMessage({ id: 'filters.condition' })}</h3>
      {MOCK_CONDITION.map((condition) => (
        <LabelWithCount key={condition.label} count={condition.count}>
          <Checkbox
            isChecked={activeCheckbox?.includes(condition.label)}
            label={formatMessage({ id: `singleProduct.condition.${condition.label}` })}
            onClick={() => {
              onCheckboxClick(condition.label);
            }}
          />
        </LabelWithCount>
      ))}
    </>
  );
};
