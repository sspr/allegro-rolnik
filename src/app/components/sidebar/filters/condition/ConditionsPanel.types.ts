import { ProductCondition } from 'api/product/product.types';

export type ConditionsPanelProps = {
  onConditionChange: (condition: ProductCondition) => void;
  activeConditions?: ProductCondition[];
};
