import { ProductCategory, ProductCondition } from 'api/product/product.types';

export type SidebarProps = {
  isScreenMobile: boolean;
  onFiltersClose: VoidFunction;
  onCategoryClick: (category: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
  onConditionClick: (condition: ProductCondition) => void;
  activeFilters: { condition?: ProductCondition[] };
};
