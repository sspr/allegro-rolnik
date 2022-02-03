import { ProductCategory, ProductCondition } from 'api/product/product.types';

export type SidebarProps = {
  isScreenMobile: boolean;
  onFiltersClose: VoidFunction;
  onCategoryClick: (category: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
  onConditionClick: (condition: ProductCondition) => void;
  onPriceChange: (price: { minPrice?: number; maxPrice?: number }) => void;
  activeFilters: {
    condition?: ProductCondition[];
    minPrice: number | undefined;
    maxPrice: number | undefined;
  };
};
