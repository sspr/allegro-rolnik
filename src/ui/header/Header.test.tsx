import { render } from 'tests';
import { Header } from './Header';
import { AppLocale } from 'context/locale/appLocale.enum';
import { translations } from 'i18n/messages';

describe('Header component', () => {
  it('renders language buttons correctly', () => {
    const { getByText } = render(<Header />);

    expect(getByText(AppLocale.en)).toBeInTheDocument();
    expect(getByText(AppLocale.pl)).toBeInTheDocument();
  });

  it('has default active language button that is bold', () => {
    const { getByText } = render(<Header />);

    expect(getByText(AppLocale.en)).toHaveClass('active');
    expect(getByText(AppLocale.en)).toHaveStyle('font-weight: 600');
  });

  it('has inactive language button that is not bold', () => {
    const { getByText } = render(<Header />);

    expect(getByText(AppLocale.pl)).toHaveClass('not-active');
    expect(getByText(AppLocale.pl)).not.toHaveStyle('font-weight: 600');
  });

  it('changes language when language button, that is not actvie, is clicked', () => {
    const { getByText, getAllByRole } = render(<Header />);

    getByText(AppLocale.pl).click();

    expect(getByText(AppLocale.pl)).toHaveClass('active');
    expect(getAllByRole('button')[0]).toHaveTextContent(translations[AppLocale.pl]['header.searchButtonText']);
  });
});
