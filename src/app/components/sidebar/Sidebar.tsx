import * as Styled from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isScreenMobile, onFiltersClose }: SidebarProps) => {
  return (
    <Styled.Sidebar>
      {isScreenMobile && <Styled.FiltersCardCloser onClick={onFiltersClose}>&#10005;</Styled.FiltersCardCloser>}
      Sidebar
      <br />
      Sidebar
      <br />
      Sidebar
    </Styled.Sidebar>
  );
};
