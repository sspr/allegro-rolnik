import { ProductCategory } from 'api/product/product.types';

type CategoryMock = {
  name: ProductCategory;
  count: number;
};

export const CATEGORY_MOCK: CategoryMock[] = [
  { name: ProductCategory.TRACTOR, count: 350 },
  { name: ProductCategory.SIDECAR, count: 111 },
  { name: ProductCategory.HARVESTER, count: 74 },
];
