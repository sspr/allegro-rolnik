import { ProductCategory } from 'api/product/product.types';

export type SidebarProps = {
  isScreenMobile: boolean;
  onFiltersClose: VoidFunction;
  onCategoryClick: (category: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
};
