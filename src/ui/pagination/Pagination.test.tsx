import { theme } from 'assets/styles/theme.styles';
import { render } from 'tests';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('renders one active link', () => {
    const { getByText } = render(<Pagination pageCount={10} currentPage={1} onPageClick={() => {}} />);

    expect(getByText('1')).toHaveStyle({ color: theme.color.primary });
  });

  it('does not render "previous" link and renders "next" link on first card', () => {
    const { getByText, queryByText } = render(<Pagination pageCount={10} currentPage={1} onPageClick={() => {}} />);

    expect(queryByText('previous')).not.toBeInTheDocument();
    expect(getByText('next')).toBeInTheDocument();
  });

  it('renders "previous" link and does not render "next" link on last card', () => {
    const { getByText, queryByText } = render(<Pagination pageCount={10} currentPage={10} onPageClick={() => {}} />);

    expect(getByText('previous')).toBeInTheDocument();
    expect(queryByText('next')).not.toBeInTheDocument();
  });

  it('renders "previous" link "next" link on one of middle card', () => {
    const { getByText } = render(<Pagination pageCount={10} currentPage={5} onPageClick={() => {}} />);

    expect(getByText('previous')).toBeInTheDocument();
    expect(getByText('next')).toBeInTheDocument();
  });

  it('renders label "of" and total count of elements', () => {
    const { getByText } = render(<Pagination pageCount={10} currentPage={1} onPageClick={() => {}} />);

    expect(getByText('of')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('renders 1 and "..." when active card number is higher than 4', () => {
    const { getByText } = render(<Pagination pageCount={10} currentPage={5} onPageClick={() => {}} />);

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('...')).toBeInTheDocument();
  });

  it('does not render "..." when active card number equal to 4', () => {
    const { queryByText } = render(<Pagination pageCount={4} currentPage={1} onPageClick={() => {}} />);

    expect(queryByText('...')).not.toBeInTheDocument();
  });

  const mockFn = jest.fn();

  it('runs callback on click correctly', () => {
    const { getByText } = render(<Pagination pageCount={10} currentPage={2} onPageClick={mockFn} />);

    getByText('3').click();
    getByText('4').click();
    getByText('next').click();
    getByText('previous').click();

    expect(mockFn).toHaveBeenCalledTimes(4);
  });
});
