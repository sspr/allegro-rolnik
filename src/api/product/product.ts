import { GetProductsUrlParams } from './product.types';

export const createGetProductsUrl = (params: GetProductsUrlParams): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    Array.isArray(value)
      ? value.forEach((element, index) => {
          searchParams.append(`${key}[${index}]`, String(element));
        })
      : searchParams.append(key, String(value));
  }

  return `machines?${searchParams.toString()}`;
};
