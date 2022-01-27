import { DecodedValueMap, QueryParamConfigMap } from 'use-query-params';
import { defaultProductParams } from './defaultParams';
import { ProductCondition, GetProductsUrlParams, ProductCategory } from './product.types';

export const createGetProductsUrl = (params: GetProductsUrlParams): string => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (Array.isArray(value)) {
      value.forEach((element, index) => {
        searchParams.append(`${key}[${index}]`, String(element));
      });
    } else if (value) {
      searchParams.append(key, String(value));
    }
  }

  return `machines?${searchParams.toString()}`;
};

export const validateProductsUrlParams = (query: DecodedValueMap<QueryParamConfigMap>): GetProductsUrlParams => {
  const validateNumber = (number: number | undefined, defaultNumber: number | undefined) =>
    number && Number.isInteger(number) && number > 0 ? number : defaultNumber;
  const validateArray = <TArray>(
    array: TArray[] | undefined,
    avaliableValues: any,
    defaultValue: TArray[] | undefined,
  ) => (Array.isArray(array) ? array.filter((cat) => String(cat).toUpperCase() in avaliableValues) : defaultValue);

  const validatedPage = validateNumber(query.page, defaultProductParams.page);
  const validatedPerPage = validateNumber(query.perPage, defaultProductParams.perPage);
  const validatedCategory = validateArray<ProductCategory>(
    query.category,
    ProductCategory,
    defaultProductParams.category,
  );
  const validatedCondition = validateArray<ProductCondition>(
    query.condition,
    ProductCondition,
    defaultProductParams.condition,
  );
  const validatedMinPrice = validateNumber(query.minPrice, defaultProductParams.minPrice);
  const validatedMaxPrice = validateNumber(query.maxPrice, defaultProductParams.maxPrice);

  const validatedQuery: GetProductsUrlParams = {
    page: validatedPage,
    perPage: validatedPerPage,
    category: validatedCategory,
    condition: validatedCondition,
    minPrice: validatedMinPrice,
    maxPrice: validatedMaxPrice,
    search: query.search,
  };

  return validatedQuery;
};
