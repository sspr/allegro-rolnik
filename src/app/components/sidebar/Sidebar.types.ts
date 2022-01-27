import { ProductCategory, ProductCondition } from 'api/product/product.types';

export type SidebarProps = {
  isScreenMobile: boolean;
  onMobileSidebarClose: VoidFunction;
  onCategoryClick: (category: ProductCategory) => void;
  onConditionClick: (condition: ProductCondition) => void;
  onPriceChange: (price: { minPrice?: number; maxPrice?: number }) => void;
  onSearchLabelClick: VoidFunction;
  activeFilters: {
    category: ProductCategory | undefined;
    condition: ProductCondition[] | undefined;
    minPrice: number | undefined;
    maxPrice: number | undefined;
    search: string | undefined;
  };
};
