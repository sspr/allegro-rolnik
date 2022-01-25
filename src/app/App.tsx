import { useEffect, useState } from 'react';
import { useIsScreenMobile, usePageTitle } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';
import { ArrayParam, NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';
import { validateProductsUrlParams } from 'api/product/product';
import { ProductCategory } from 'api/product/product.types';

export const App = () => {
  usePageTitle();

  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
    category: withDefault(ArrayParam, defaultProductParams.category),
  });

  const validatedQuery = validateProductsUrlParams(query);

  useEffect(() => {
    setQuery(validatedQuery);
  }, []);

  const updatePageQuery = (page: number) => {
    setQuery({ page });
  };

  const updateCategoryQuery = (categoryName: ProductCategory) => {
    if (query.category !== undefined) {
      const category = query.category.includes(categoryName) ? [] : [categoryName];
      setQuery({ category, page: 1 });
    }
  };

  const toggleFilters = () => {
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
              onFiltersClose={toggleFilters}
              onCategoryClick={updateCategoryQuery}
              activeCategory={validatedQuery.category ? validatedQuery.category[0] : undefined}
            />
          )}
          <Main
            isScreenMobile={isScreenMobile}
            onFilterClick={toggleFilters}
            productsParams={validatedQuery}
            onPageClick={updatePageQuery}
          />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
