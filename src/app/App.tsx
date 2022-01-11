import { useState } from 'react';
import { useIsScreenMobile } from 'hooks';
import * as Styled from './App.styles';
import { Header } from 'ui/header/Header';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';

export const App = () => {
  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsScreenMobile();

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
          <Main isScreenMobile={isScreenMobile} onFilterClick={toggleFilters} />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
