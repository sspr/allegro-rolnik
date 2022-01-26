import * as Styled from './Filters.styles';
import { useIntl } from 'react-intl';
import { Condition } from './condition/Condition';
import { LabelWithButton } from 'ui';
import { FiltersProps } from './Filters.types';

export const Filters = ({ onConditionClick, activeFilters }: FiltersProps) => {
  const { formatMessage } = useIntl();
  return (
    <>
      {activeFilters.condition && activeFilters.condition.length > 0 && (
        <Styled.FiltersApplied>
          {activeFilters.condition.map((condition) => (
            <LabelWithButton
              key={condition}
              onClick={() => {
                onConditionClick(condition);
              }}
              text={formatMessage({ id: `singleProduct.condition.${condition}` })}
            />
          ))}
        </Styled.FiltersApplied>
      )}
      <Styled.Filters>
        <h2>{formatMessage({ id: 'filters.filters' })}</h2>
        <Condition onCheckboxClick={onConditionClick} activeCheckbox={activeFilters.condition} />
      </Styled.Filters>
    </>
  );
};
