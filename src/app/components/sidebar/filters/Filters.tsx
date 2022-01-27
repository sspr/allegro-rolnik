import * as Styled from './Filters.styles';
import { Condition } from './condition/Condition';
import { LabelWithButton } from 'ui';
import { FiltersProps } from './Filters.types';
import { Price } from './price/Price';
import { useLocale } from 'hooks';
import { FormatNumberOptions } from 'react-intl';

export const Filters = ({ onConditionClick, onPriceChange, activeFilters }: FiltersProps) => {
  const { formatMessage, formatNumber } = useLocale();

  const currencyConfig: FormatNumberOptions = {
    style: 'currency',
    currency: 'PLN',
    maximumFractionDigits: 0,
  };

  return (
    <>
      {((activeFilters.condition && activeFilters.condition.length > 0) ||
        activeFilters.minPrice ||
        activeFilters.maxPrice) && (
        <Styled.FiltersApplied>
          {activeFilters.condition &&
            activeFilters.condition.length > 0 &&
            activeFilters.condition.map((condition) => (
              <LabelWithButton
                key={condition}
                onClick={() => {
                  onConditionClick(condition);
                }}
                text={formatMessage({ id: `singleProduct.condition.${condition}` })}
              />
            ))}
          {activeFilters.minPrice && (
            <LabelWithButton
              onClick={() => {
                onPriceChange({ minPrice: undefined });
              }}
              prefix={`${formatMessage({ id: `filters.price` }).toLowerCase()} ${formatMessage({
                id: `filters.minPrice`,
              })}`}
              text={formatNumber(activeFilters.minPrice, currencyConfig)}
            />
          )}
          {activeFilters.maxPrice && (
            <LabelWithButton
              onClick={() => {
                onPriceChange({ maxPrice: undefined });
              }}
              prefix={`${formatMessage({ id: `filters.price` }).toLowerCase()} ${formatMessage({
                id: `filters.maxPrice`,
              })}`}
              text={formatNumber(activeFilters.maxPrice, currencyConfig)}
            />
          )}
        </Styled.FiltersApplied>
      )}
      <Styled.Filters>
        <h2>{formatMessage({ id: 'filters.filters' })}</h2>
        <Condition onCheckboxClick={onConditionClick} activeCheckbox={activeFilters.condition} />
        <Price onInputChange={onPriceChange} minPrice={activeFilters.minPrice} maxPrice={activeFilters.maxPrice} />
      </Styled.Filters>
    </>
  );
};
