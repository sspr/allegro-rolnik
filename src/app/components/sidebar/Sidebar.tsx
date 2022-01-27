import { Categories } from './categories/Categories';
import { Filters } from './filters/Filters';
import * as Styled from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
  isScreenMobile,
  onFiltersClose,
  onCategoryClick,
  activeCategory,
  onConditionClick,
  onPriceChange,
  activeFilters,
}: SidebarProps) => {
  return (
    <Styled.Sidebar>
      {isScreenMobile && <Styled.FiltersCardCloser onClick={onFiltersClose}>&#10005;</Styled.FiltersCardCloser>}
      <Categories onCategoryClick={onCategoryClick} activeCategory={activeCategory} />
      <Filters onConditionClick={onConditionClick} onPriceChange={onPriceChange} activeFilters={activeFilters} />
    </Styled.Sidebar>
  );
};
