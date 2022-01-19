import { GetProductsUrlParams } from './product.types';

export const createGetProductsUrl = (params: GetProductsUrlParams): string => {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  for (const [key, value] of Object.entries(params)) {
    if (value < 0) {
      searchParams.delete(key);
    } else {
      searchParams.has(key) ? searchParams.set(key, String(value)) : searchParams.append(key, String(value));
    }
    // window.history.pushState(null, document.title, `?${searchParams.toString()}`);
  }

  return searchParams.toString();
};
