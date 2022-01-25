import { ProductCategory } from 'api/product/product.types';

export type CategoriesProps = {
  onCategoryClick: (category: ProductCategory) => void;
  activeCategory: ProductCategory | undefined;
};
