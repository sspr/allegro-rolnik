export type PriceProps = {
  onInputChange: (price: { minPrice?: number; maxPrice?: number }) => void;
  minPrice: number | undefined;
  maxPrice: number | undefined;
};
