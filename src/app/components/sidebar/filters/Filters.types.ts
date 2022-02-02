import { ProductCondition } from 'api/product/product.types';

export type FiltersProps = {
  onConditionClick: (condition: ProductCondition) => void;
  onPriceChange: (price: { minPrice?: number; maxPrice?: number }) => void;
  activeFilters: {
    condition?: ProductCondition[];
    minPrice: number | undefined;
    maxPrice: number | undefined;
  };
};

export type ActiveFliterItem = {
  value: undefined | string | number;
  prefix?: string;
  text: string;
  onClick: VoidFunction;
};
