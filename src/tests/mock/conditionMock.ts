import { ProductCondition } from 'api/product/product.types';

export type ConditionMock = {
  label: ProductCondition;
  count: number;
};

export const MOCK_CONDITION: ConditionMock[] = [
  { label: ProductCondition.NEW, count: 12 },
  { label: ProductCondition.USED, count: 27 },
];
