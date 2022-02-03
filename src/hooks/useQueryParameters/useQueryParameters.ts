import { ArrayParam, NumberParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';
import { validateProductsUrlParams } from 'api/product/product';
import { ProductCategory, ProductCondition } from 'api/product/product.types';
import { useEffect } from 'react';

export const useQueryParameters = () => {
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
    category: withDefault(ArrayParam, defaultProductParams.category),
    condition: withDefault(ArrayParam, defaultProductParams.condition),
    minPrice: NumberParam,
    maxPrice: NumberParam,
    search: StringParam,
  });

  const validatedQuery = validateProductsUrlParams(query);

  useEffect(() => {
    setQuery(validatedQuery);
  }, []);

  const updatePageQuery = (page: number) => {
    setQuery({ page });
  };

  const updateCategoryQuery = (categoryName: ProductCategory) => {
    if (validatedQuery.category !== undefined) {
      const category = validatedQuery.category.includes(categoryName) ? [] : [categoryName];
      setQuery({ category, page: 1 });
    }
  };

  const updateConditionQuery = (conditionValue: ProductCondition) => {
    if (validatedQuery.condition) {
      const condition: ProductCondition[] = [];
      if (validatedQuery.condition.includes(conditionValue)) {
        condition.push(...validatedQuery.condition.filter((cond) => cond !== conditionValue));
      } else {
        condition.push(...validatedQuery.condition);
        condition.push(conditionValue);
      }
      setQuery({ condition, page: 1 });
    }
  };

  const updatePriceQuery = (price: { minPrice?: number; maxPrice?: number }) => {
    if (price.minPrice === 0) {
      price.minPrice = undefined;
    }
    if (price.maxPrice === 0) {
      price.maxPrice = undefined;
    }
    setQuery({ ...price, page: 1 });
  };

  const updateSearchQuery = (search: string) => {
    search === '' ? setQuery({ search: undefined, page: 1 }) : setQuery({ search, page: 1 });
  };

  const filersQuery = {
    category: validatedQuery.category ? validatedQuery.category[0] : undefined,
    condition: validatedQuery?.condition,
    minPrice: validatedQuery?.minPrice,
    maxPrice: validatedQuery?.maxPrice,
    search: validatedQuery?.search,
  };

  return {
    validatedQuery,
    filersQuery,
    updatePageQuery,
    updateCategoryQuery,
    updateConditionQuery,
    updatePriceQuery,
    updateSearchQuery,
  };
};
