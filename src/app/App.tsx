import { useState } from 'react';
import { useIsScreenMobile, usePageTitle, useQueryParameters } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';

export const App = () => {
  usePageTitle();

  const {
    validatedQuery,
    filersQuery,
    updatePageQuery,
    updateCategoryQuery,
    updateConditionQuery,
    updatePriceQuery,
    updateSearchQuery,
  } = useQueryParameters();

  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

  const toggleMobileSidebar = () => {
    setIsMobileFiltersVisable((prevState) => !prevState);
  };

  return (
    <>
      <Header initialSearch={validatedQuery.search ? validatedQuery.search : ''} onSubmit={updateSearchQuery} />
      <Styled.Wrapper>
        <Styled.Content>
          {(!isScreenMobile || isMobileFiltersVisable) && (
            <Sidebar
              isScreenMobile={isScreenMobile}
              onMobileSidebarClose={toggleMobileSidebar}
              onCategoryClick={updateCategoryQuery}
              onConditionClick={updateConditionQuery}
              onPriceChange={updatePriceQuery}
              onSearchLabelClick={() => {
                updateSearchQuery('');
              }}
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
