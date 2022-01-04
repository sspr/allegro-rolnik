import { useState } from 'react';
import { useCheckMobileScreen } from '../hooks/useCheckMobileScreen';
import * as Styled from './App.styles';
import { Main } from './components/main/Main';
import { Sidebar } from './components/sidebar/Sidebar';

export const App = () => {
  const [mobileFiltersVisable, setMobileFiltersVisable] = useState<boolean>(false);
  const screenIsMobile = useCheckMobileScreen();

  const mobileFiltersToggleHandler = () => {
    setMobileFiltersVisable((prevState) => !prevState);
  };

  return (
    <>
      <Styled.Wrapper>
        <Styled.Content>
          {!screenIsMobile || mobileFiltersVisable ? (
            <Sidebar
              screenIsMobile={screenIsMobile}
              mobileFiltersVisable={mobileFiltersVisable}
              handleMobileFiltersToggle={mobileFiltersToggleHandler}
            />
          ) : null}
          <Main screenIsMobile={screenIsMobile} handleMobileFiltersToggle={mobileFiltersToggleHandler} />
        </Styled.Content>
      </Styled.Wrapper>
    </>
  );
};
