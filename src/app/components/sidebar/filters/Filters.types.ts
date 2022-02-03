import { ProductCondition } from 'api/product/product.types';

export type FiltersProps = {
  onConditionClick: (condition: ProductCondition) => void;
  onPriceChange: (price: { minPrice?: number; maxPrice?: number }) => void;
  onSearchLabelClick: VoidFunction;
  activeFilters: {
    condition?: ProductCondition[];
    minPrice: number | undefined;
    maxPrice: number | undefined;
    search: string | undefined;
  };
};

export type ActiveFliteredItem = {
  value: undefined | string | number;
  name: string | undefined;
  onClick: VoidFunction;
};
