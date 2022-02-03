import { render } from 'tests';
import { Header } from './Header';
import { AppLocale } from 'context/locale/appLocale.enum';
import { translations } from 'i18n/messages';
import { AssertionError } from 'assert';

describe('Header component', () => {
  it('renders language buttons correctly', () => {
    const { getByText } = render(<Header initialSearch="" onSubmit={() => {}} />);

    expect(getByText(AppLocale.en)).toBeInTheDocument();
    expect(getByText(AppLocale.pl)).toBeInTheDocument();
  });

  it('has default active language button that is bold', () => {
    const { getByText } = render(<Header initialSearch="" onSubmit={() => {}} />);

    expect(getByText(AppLocale.en)).toHaveClass('active');
    expect(getByText(AppLocale.en)).toHaveStyle('font-weight: 600');
  });

  it('has inactive language button that is not bold', () => {
    const { getByText } = render(<Header initialSearch="" onSubmit={() => {}} />);

    expect(getByText(AppLocale.pl)).toHaveClass('not-active');
    expect(getByText(AppLocale.pl)).not.toHaveStyle('font-weight: 600');
  });

  it('changes language when language button, that is not actvie, is clicked', () => {
    const { getByText, getAllByRole } = render(<Header initialSearch="" onSubmit={() => {}} />);

    getByText(AppLocale.pl).click();

    expect(getByText(AppLocale.pl)).toHaveClass('active');
    expect(getAllByRole('button')[0]).toHaveTextContent(translations[AppLocale.pl]['header.searchButtonText']);
  });

  it('displays input value', () => {
    const { getByPlaceholderText } = render(<Header initialSearch="sidecar 3,5t" onSubmit={() => {}} />);
    const input = getByPlaceholderText(translations[AppLocale.en]['header.searchInputPlaceholder']);

    if (!(input instanceof HTMLInputElement)) {
      throw new AssertionError({ message: 'expected input to be an HTMLInputElement' });
    }

    expect(input.value).toBe('sidecar 3,5t');
  });
});
