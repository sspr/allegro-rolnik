export type SidebarProps = {
  isScreenMobile: boolean;
  onFiltersClose: VoidFunction;
  onCategoryClick: (categoryName: string) => void;
  activeCategory: string | null | undefined;
};
