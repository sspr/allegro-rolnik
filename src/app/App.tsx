import { useState } from 'react';
import { useIsScreenMobile } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';
import { ArrayParam, NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';

export const App = () => {
  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
    category: withDefault(ArrayParam, defaultProductParams.category),
  });

  const updatePageQuery = (page: number) => {
    setQuery({ page });
  };

  const updateCategoryQuery = (categoryName: string) => {
    if (query.category !== undefined) {
      const category = query.category.includes(categoryName)
        ? query.category.filter((singleCategory) => singleCategory !== categoryName)
        : [...query?.category, categoryName];
      setQuery({ category });
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
            <Sidebar isScreenMobile={isScreenMobile} onFiltersClose={toggleFilters} />
          )}
          <Main
            isScreenMobile={isScreenMobile}
            onFilterClick={toggleFilters}
            productsQuery={query}
            changeCurrentPage={updatePageQuery}
          />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
