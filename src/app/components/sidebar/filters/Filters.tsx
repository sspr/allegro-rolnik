import * as Styled from './Filters.styles';
import { useIntl } from 'react-intl';
import { ConditionsPanel } from './condition/ConditionsPanel';
import { LabelWithButton } from 'ui';
import { FiltersProps, ActiveFliterItem } from './Filters.types';
import { PricePanel } from './pricePanel/PricePanel';
import { useLocale } from 'hooks';
import { FormatNumberOptions } from 'react-intl';

export const Filters = ({ onConditionClick, onPriceChange, activeFilters }: FiltersProps) => {
  const { formatMessage, formatNumber } = useLocale();

  const currencyConfig: FormatNumberOptions = {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  };

  const isAnyFilterApplied =
    (activeFilters.condition && activeFilters.condition.length > 0) || activeFilters.minPrice || activeFilters.maxPrice;

  const activeFliterItems: ActiveFliterItem[] = [];

  activeFilters.condition?.forEach((condition) => {
    activeFliterItems.push({
      value: condition,
      text: condition,
      onClick: () => {
        onConditionClick(condition);
      },
    });
  });

  [
    { name: 'minPrice', value: activeFilters.minPrice },
    { name: 'maxPrice', value: activeFilters.maxPrice },
  ].forEach((price) => {
    activeFliterItems.push({
      value: price.value,
      prefix: `${formatMessage({ id: `filters.price` }).toLowerCase()} ${formatMessage({
        id: `filters.${price.name}`,
      })}`,
      text: formatNumber(price.value ? price.value : 0, currencyConfig),
      onClick: () => {
        onPriceChange(price.name === 'minPrice' ? { minPrice: undefined } : { maxPrice: undefined });
      },
    });
  });

  return (
    <>
      {isAnyFilterApplied && (
        <Styled.FiltersApplied>
          {activeFliterItems.map((item) =>
            item.value ? (
              <LabelWithButton
                key={item.prefix ? item.prefix : item.text}
                onClick={item.onClick}
                text={item.text}
                prefix={item.prefix}
              />
            ) : null,
          )}
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
