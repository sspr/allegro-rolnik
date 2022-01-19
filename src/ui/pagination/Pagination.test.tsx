import { render } from 'tests';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
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
    const { getByText, queryByText } = render(<Pagination pageCount={4} currentPage={1} onPageClick={() => {}} />);

    expect(queryByText('...')).not.toBeInTheDocument();
  });

  it('does not render "..." when active page count is equal to 6 or lower', () => {
    const { queryByText } = render(<Pagination pageCount={6} currentPage={1} onPageClick={() => {}} />);

    expect(queryByText('...')).not.toBeInTheDocument();
  });
});
