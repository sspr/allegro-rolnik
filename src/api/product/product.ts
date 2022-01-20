import { GetProductsUrlParams } from './product.types';

export const createGetProductsUrl = (params: GetProductsUrlParams): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    searchParams.append(key, String(value));
  }

  return `machines?${searchParams.toString()}`;
};
