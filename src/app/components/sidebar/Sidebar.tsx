import * as Styled from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ screenIsMobile, mobileFiltersVisable, handleMobileFiltersToggle }: SidebarProps) => {
  return (
    <Styled.Sidebar>
      {screenIsMobile ? (
        <Styled.FiltersCardCloser onClick={handleMobileFiltersToggle}>&#10005;</Styled.FiltersCardCloser>
      ) : null}
      Sidebar
      <br />
      Sidebar
      <br />
      Sidebar
    </Styled.Sidebar>
  );
};
