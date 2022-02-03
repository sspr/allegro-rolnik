import { ActiveFliteredItem, FiltersProps } from './Filters.types';

export const generateActiveFilterItems = ({ onConditionClick, onPriceChange, activeFilters }: FiltersProps) => {
  const isAnyFilterApplied =
    (activeFilters.condition && activeFilters.condition.length > 0) || activeFilters.minPrice || activeFilters.maxPrice;

  const conditionFilters = activeFilters.condition
    ? activeFilters.condition?.map((condition) => {
        return {
          name: undefined,
          value: condition,
          onClick: () => {
            onConditionClick(condition);
          },
        };
      })
    : [];

  const priceFilters = [
    {
      name: 'minPrice',
      value: activeFilters.minPrice,
      onClick: () => {
        onPriceChange({ minPrice: undefined });
      },
    },
    {
      name: 'maxPrice',
      value: activeFilters.maxPrice,
      onClick: () => {
        onPriceChange({ maxPrice: undefined });
      },
    },
  ];

  const activeFliteredItems: ActiveFliteredItem[] = [...conditionFilters, ...priceFilters].filter(
    (filter) => filter.value,
  );

  return { isAnyFilterApplied, activeFliteredItems };
};
