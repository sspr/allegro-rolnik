import { useEffect, useState } from 'react';
import { useIsScreenMobile, usePageTitle } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';
import { ArrayParam, NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';
import { GetProductsUrlParams } from 'api/product/product.types';
import { ProductCategory } from 'api/product/productCategory.enum';
import { validateProductsUrlParams } from 'api/product/product';

export const App = () => {
  usePageTitle();

  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
    category: withDefault(ArrayParam, defaultProductParams.category),
  });

  useEffect(() => {
    setQuery(validateProductsUrlParams(query));
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
              activeCategory={query?.category ? (query?.category[0] as ProductCategory) : undefined}
            />
          )}
          <Main
            isScreenMobile={isScreenMobile}
            onFilterClick={toggleFilters}
            productsQuery={query as GetProductsUrlParams}
            changeProductsQuery={updatePageQuery}
          />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
