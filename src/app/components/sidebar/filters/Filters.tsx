import * as Styled from './Filters.styles';
import { ConditionsPanel } from './condition/ConditionsPanel';
import { LabelWithButton } from 'ui';
import { FiltersProps } from './Filters.types';
import { PricePanel } from './pricePanel/PricePanel';
import { useLocale } from 'hooks';
import { FormatNumberOptions } from 'react-intl';
import { generateActiveFilterItems } from './Filters.utils';

export const Filters = ({ onConditionClick, onPriceChange, activeFilters }: FiltersProps) => {
  const { formatMessage, formatNumber } = useLocale();

  const currencyConfig: FormatNumberOptions = {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  };

  const { isAnyFilterApplied, activeFliteredItems } = generateActiveFilterItems({
    onConditionClick,
    onPriceChange,
    activeFilters,
  });

  return (
    <>
      {isAnyFilterApplied && (
        <Styled.FiltersApplied>
          {activeFliteredItems.map((item) => (
            <LabelWithButton
              key={item.name ? item.name : item.value}
              onClick={item.onClick}
              text={
                typeof item.value === 'number'
                  ? formatNumber(item.value ? item.value : 0, currencyConfig)
                  : String(item.value)
              }
              prefix={
                item.name
                  ? `${formatMessage({ id: `filters.price` }).toLowerCase()} ${formatMessage({
                      id: `filters.${item.name}`,
                    })}`
                  : undefined
              }
            />
          ))}
        </Styled.FiltersApplied>
      )}
      <Styled.Filters>
        <h2>{formatMessage({ id: 'filters.filters' })}</h2>
        <ConditionsPanel onConditionChange={onConditionClick} activeConditions={activeFilters.condition} />
        <PricePanel onInputChange={onPriceChange} minPrice={activeFilters.minPrice} maxPrice={activeFilters.maxPrice} />
      </Styled.Filters>
    </>
  );
};
