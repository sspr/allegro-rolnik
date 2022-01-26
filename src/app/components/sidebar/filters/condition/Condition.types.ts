import { ProductCondition } from 'api/product/product.types';

export type ConditionProps = {
  onCheckboxClick: (condition: ProductCondition) => void;
  activeCheckbox?: ProductCondition[];
};
