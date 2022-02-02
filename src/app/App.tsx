import { useState } from 'react';
import { useIsScreenMobile, usePageTitle, useQueryParameters } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';

export const App = () => {
  usePageTitle();

  const { validatedQuery, filersQuery, updatePageQuery, updateCategoryQuery, updateConditionQuery } =
    useQueryParameters();

  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

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
