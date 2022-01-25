import { DecodedValueMap, QueryParamConfigMap } from 'use-query-params';
import { defaultProductParams } from './defaultParams';
import { GetProductsUrlParams, ProductCategory } from './product.types';

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

export const validateProductsUrlParams = (query: DecodedValueMap<QueryParamConfigMap>): GetProductsUrlParams => {
  const validateNumber = (number: number | undefined, defaultNumber: number | undefined) =>
    number && Number.isInteger(number) && number > 0 ? number : defaultNumber;

  const validatedPage = validateNumber(query.page, defaultProductParams.page);
  const validatedPerPage = validateNumber(query.perPage, defaultProductParams.perPage);
  const validatedCategory = Array.isArray(query.category)
    ? query.category.filter((cat) => cat in ProductCategory)
    : defaultProductParams.category;

  return {
    page: validatedPage,
    perPage: validatedPerPage,
    category: validatedCategory,
  };
};
