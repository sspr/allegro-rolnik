import { render } from 'tests';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  it('does not render "previous" link and renders "next" link on first card', () => {
    const { getByText, queryByText } = render(<Pagination productsCount={150} />);

    expect(queryByText('previous')).not.toBeInTheDocument();
    expect(getByText('next')).toBeInTheDocument();
  });

  it('renders "previous" link and does not render "next" link on last card', () => {
    const { getByText, queryByText } = render(<Pagination productsCount={150} />);

    getByText('10').click();

    expect(getByText('previous')).toBeInTheDocument();
    expect(queryByText('next')).not.toBeInTheDocument();
  });

  it('renders "previous" link "next" link on one of middle card', () => {
    const { getByText } = render(<Pagination productsCount={150} />);

    getByText('8').click();

    expect(getByText('previous')).toBeInTheDocument();
    expect(getByText('next')).toBeInTheDocument();
  });

  it('renders label "of" and total count of elements', () => {
    const { getByText } = render(<Pagination productsCount={150} />);

    getByText('1').click();

    expect(getByText('of')).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
  });

  it('renders 1 and "..." when active card number is higher than 4', () => {
    const { getByText } = render(<Pagination productsCount={150} />);

    getByText('5').click();

    expect(getByText('1')).toBeInTheDocument();
    expect(getByText('...')).toBeInTheDocument();
  });

  it('does not render "..." hen active card number equal to 4', () => {
    const { getByText, queryByText } = render(<Pagination productsCount={150} />);

    getByText('4').click();

    expect(queryByText('...')).not.toBeInTheDocument();
  });
});
