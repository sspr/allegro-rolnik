import { ProductCategory } from 'api/product/productCategory.enum';

type CategoryMock = {
  name: ProductCategory;
  count: number;
};

export const CATEGORY_MOCK: CategoryMock[] = [
  { name: ProductCategory.tractor, count: 350 },
  { name: ProductCategory.sidecar, count: 111 },
  { name: ProductCategory.harvester, count: 74 },
];
