import { Categories } from './categories/Categories';
import * as Styled from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({ isScreenMobile, onFiltersClose, onCategoryClick, activeCategory }: SidebarProps) => {
  return (
    <Styled.Sidebar>
      {isScreenMobile && <Styled.FiltersCardCloser onClick={onFiltersClose}>&#10005;</Styled.FiltersCardCloser>}
      <Categories onCategoryClick={onCategoryClick} activeCategory={activeCategory} />
    </Styled.Sidebar>
  );
};
