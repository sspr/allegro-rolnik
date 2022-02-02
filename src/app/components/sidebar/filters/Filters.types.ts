import { ProductCondition } from 'api/product/product.types';

export type FiltersProps = {
  onConditionClick: (condition: ProductCondition) => void;
  activeFilters: { condition?: ProductCondition[] };
};
