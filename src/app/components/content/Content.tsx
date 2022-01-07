import { useIsMobileScreen } from 'hooks';
import { useState } from 'react';
import * as Styled from './Content.styles';

export const Content = () => {
  const [isMobileFiltersVisable, setIsMobileFiltersVisable] = useState<boolean>(false);
  const isScreenMobile = useIsMobileScreen();

  const toggleFilters = () => {
    setIsMobileFiltersVisable((prevState) => !prevState);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Content>
          {!isScreenMobile || isMobileFiltersVisable ? (
            <Styled.Sidebar>
              {isScreenMobile ? (
                <Styled.FiltersCardCloser onClick={toggleFilters}>&#10005;</Styled.FiltersCardCloser>
              ) : null}
              Sidebar
              <br />
              Sidebar
              <br />
              Sidebar
            </Styled.Sidebar>
          ) : null}
          <Styled.Main>
            {isScreenMobile ? <Styled.Filters onClick={toggleFilters}>filters and categories</Styled.Filters> : null}
            Main
          </Styled.Main>
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
