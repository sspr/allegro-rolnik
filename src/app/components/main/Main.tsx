import * as Styled from './Main.styles';
import { MainProps } from './Main.types';

export const Main = ({ isScreenMobile, onFilterClick }: MainProps) => {
  return (
    <Styled.Main>
      {isScreenMobile ? (
        <Styled.FiltersSwitch onClick={onFilterClick}>filters and categories</Styled.FiltersSwitch>
      ) : null}
      Main
    </Styled.Main>
  );
};
