import * as Styled from './Main.styles';
import { MainProps } from './Main.types';

export const Main = ({ screenIsMobile, handleMobileFiltersToggle }: MainProps) => {
  return (
    <Styled.Main>
      {screenIsMobile ? (
        <Styled.Filters onClick={handleMobileFiltersToggle}>filters and categories</Styled.Filters>
      ) : null}
      Main
    </Styled.Main>
  );
};
