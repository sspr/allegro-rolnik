import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { CATEGORY_MOCK } from 'tests/categoriesMock';
import { Categories } from './Categories';

describe('Categories component', () => {
  it('renders "Categories" header', () => {
    const { getByText } = render(<Categories activeCategory={undefined} onCategoryClick={() => {}} />);

    expect(getByText('Categories')).toBeInTheDocument();
  });

  it('renders all categories with counts', () => {
    const { getByText } = render(<Categories activeCategory={undefined} onCategoryClick={() => {}} />);

    CATEGORY_MOCK.forEach((category) => {
      expect(getByText(`${category.name}s`, { exact: false })).toBeInTheDocument();
      expect(getByText(category.count)).toBeInTheDocument();
    });
  });

  const mockFn = jest.fn();

  it('renders categories with counts, only categories are clickable', () => {
    const { getByText } = render(<Categories activeCategory={undefined} onCategoryClick={mockFn} />);

    CATEGORY_MOCK.forEach((category) => {
      getByText(`${category.name}s`, { exact: false }).click();
      getByText(category.count).click();
    });

    expect(mockFn).toHaveBeenCalledTimes(CATEGORY_MOCK.length);
  });

  it('renders not clickable active category which has primary color', () => {
    const { getByText } = render(<Categories activeCategory={CATEGORY_MOCK[0].name} onCategoryClick={mockFn} />);

    getByText(`${CATEGORY_MOCK[0].name}s`, { exact: false }).click();

    expect(mockFn).not.toHaveBeenCalled();
    expect(getByText(`${CATEGORY_MOCK[0].name}s`, { exact: false })).toHaveStyle({ color: theme.color.primary });
  });

  it('renders "go back to" link', () => {
    const { getByText } = render(<Categories activeCategory={CATEGORY_MOCK[0].name} onCategoryClick={() => {}} />);

    expect(getByText('go back to')).toBeInTheDocument();
    expect(getByText('all machines')).toBeInTheDocument();
    expect(getByText('all machines')).toHaveStyle({ color: theme.color.secondary });
  });

  it('renders clickable "all machines" button', () => {
    const { getByText } = render(<Categories activeCategory={CATEGORY_MOCK[0].name} onCategoryClick={mockFn} />);

    getByText('all machines').click();

    expect(mockFn).toHaveBeenCalled();
  });
});
