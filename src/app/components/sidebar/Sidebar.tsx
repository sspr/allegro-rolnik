import { Categories } from './categories/Categories';
import { Filters } from './filters/Filters';
import * as Styled from './Sidebar.styles';
import { SidebarProps } from './Sidebar.types';

export const Sidebar = ({
  isScreenMobile,
  onMobileSidebarClose,
  onCategoryClick,
  onConditionClick,
  onPriceChange,
  onSearchLabelClick,
  activeFilters,
}: SidebarProps) => {
  return (
    <Styled.Sidebar>
      {isScreenMobile && (
        <Styled.MobileSidebarCloser onClick={onMobileSidebarClose}>&#10005;</Styled.MobileSidebarCloser>
      )}
      <Categories onCategoryClick={onCategoryClick} activeCategory={activeFilters.category} />
      <Filters
        onConditionClick={onConditionClick}
        onPriceChange={onPriceChange}
        activeFilters={activeFilters}
        onSearchLabelClick={onSearchLabelClick}
      />
    </Styled.Sidebar>
  );
};
