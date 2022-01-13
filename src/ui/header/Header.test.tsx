import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { AppProviders } from 'providers/AppProviders';
import { defaultLocale } from 'context/locale/defaultLocale';
import { AppLocale } from 'context/locale/appLocale.enum';
import { translations } from 'i18n/messages';

describe('Header component', () => {
  it('renders language switch', () => {
    render(
      <AppProviders>
        <Header />
      </AppProviders>,
    );

    const localeButtonEn = screen.getByText(AppLocale.en);
    const localeButtonPl = screen.getByText(AppLocale.pl);

    expect(localeButtonEn).toBeInTheDocument();
    expect(localeButtonPl).toBeInTheDocument();
  });

  it('has default active localeButton that is bold', () => {
    render(
      <AppProviders>
        <Header />
      </AppProviders>,
    );

    const localeButtonActive = screen.queryByText(defaultLocale);

    expect(localeButtonActive).toHaveClass('active');
    expect(localeButtonActive).toHaveStyle('font-weight: 600');
  });

  it('has inactive localeButton that is not bold', () => {
    render(
      <AppProviders>
        <Header />
      </AppProviders>,
    );

    const localeButtonNotActive = screen.getByText(defaultLocale === AppLocale.en ? AppLocale.pl : AppLocale.en);

    expect(localeButtonNotActive).toHaveClass('not-active');
    expect(localeButtonNotActive).not.toHaveStyle('font-weight: 600');
  });

  it('changes language when localeButton that is not actvie is clicked', () => {
    render(
      <AppProviders>
        <Header />
      </AppProviders>,
    );

    const localeButtonNotActive = screen.getByText(defaultLocale === AppLocale.en ? AppLocale.pl : AppLocale.en);

    localeButtonNotActive.click();

    const clickedLocaleButton = screen.getByText(defaultLocale === AppLocale.en ? AppLocale.pl : AppLocale.en);
    const searchButton = screen.getAllByRole('button')[0];

    expect(clickedLocaleButton).toHaveClass('active');
    expect(searchButton).toHaveTextContent(
      defaultLocale === AppLocale.en
        ? translations[AppLocale.pl]['header.searchButtonText']
        : translations[AppLocale.en]['header.searchButtonText'],
    );
  });
});
