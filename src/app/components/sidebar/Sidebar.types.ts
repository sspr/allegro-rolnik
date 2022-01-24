import { ProductCategory } from 'api/product/productCategory.enum';

export type SidebarProps = {
  isScreenMobile: boolean;
  onFiltersClose: VoidFunction;
  onCategoryClick: (categoryName: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
};
