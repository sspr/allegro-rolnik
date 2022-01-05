import * as Styled from './Header.styles';
import logo from 'assets/images/logo.svg';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { AppLocale } from 'context/locale/appLocale.enum';
import { LocaleButton } from './localeButton/LocaleButton';
import { useLocale } from 'hooks';

export const Header = () => {
  const appLocaleValues = Object.values<AppLocale>(AppLocale);
  const { formatMessage, setLocale } = useLocale();

  return (
    <Styled.HeaderWrapper>
      <Styled.Header>
        <Styled.Logo>
          <img src={logo} alt={formatMessage({ id: 'header.logoAlt' })} />
          <span>{formatMessage({ id: 'header.logoText' })}</span>
        </Styled.Logo>
        <Styled.Form>
          <Input placeholder={formatMessage({ id: 'header.searchInputPlaceholder' })} />
          <Button type="submit">{formatMessage({ id: 'header.searchButtonText' })}</Button>
        </Styled.Form>
        <div>
          {appLocaleValues.map((localeValue, index) => (
            <span key={localeValue}>
              <LocaleButton
                text={localeValue}
                onClick={() => {
                  setLocale(localeValue);
                }}
              />
              {index < localeValue.length - 1 ? ' | ' : null}
            </span>
          ))}
        </div>
      </Styled.Header>
    </Styled.HeaderWrapper>
  );
};
