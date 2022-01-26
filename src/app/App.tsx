import { useEffect, useState } from 'react';
import { useIsScreenMobile, usePageTitle } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';
import { ArrayParam, NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';
import { validateProductsUrlParams } from 'api/product/product';
import { ProductCategory, ProductCondition } from 'api/product/product.types';

export const App = () => {
  usePageTitle();

  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
    category: withDefault(ArrayParam, defaultProductParams.category),
    condition: withDefault(ArrayParam, defaultProductParams.condition),
    minPrice: NumberParam,
    maxPrice: NumberParam,
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

  const filersQuery = {
    condition: validatedQuery?.condition,
  };

  const toggleMobileSidebar = () => {
    setIsMobileFiltersVisable((prevState) => !prevState);
  };

  return (
    <>
      <Header />
      <Styled.Wrapper>
        <Styled.Content>
          {(!isScreenMobile || isMobileFiltersVisable) && (
            <Sidebar
              isScreenMobile={isScreenMobile}
              onFiltersClose={toggleMobileSidebar}
              onCategoryClick={updateCategoryQuery}
              activeCategory={validatedQuery.category ? validatedQuery.category[0] : undefined}
              onConditionClick={updateConditionQuery}
              activeFilters={filersQuery}
            />
          )}
          <Main
            isScreenMobile={isScreenMobile}
            onMobileSidebarSwitchClick={toggleMobileSidebar}
            productsParams={validatedQuery}
            onPageClick={updatePageQuery}
          />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
