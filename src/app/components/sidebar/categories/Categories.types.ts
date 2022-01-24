import { ProductCategory } from 'api/product/productCategory.enum';

export type CategoriesProps = {
  onCategoryClick: (category: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
};
