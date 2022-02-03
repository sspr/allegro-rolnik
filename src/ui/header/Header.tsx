import * as Styled from './Header.styles';
import logo from 'assets/images/logo.svg';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import { AppLocale } from 'context/locale/appLocale.enum';
import { LocaleButton } from './localeButton/LocaleButton';
import { useLocale } from 'hooks';
import { HeaderProps } from './Header.types';
import { useEffect, useState } from 'react';

export const Header = ({ initialSearch, onSubmit }: HeaderProps) => {
  const appLocaleValues = Object.values<AppLocale>(AppLocale);
  const { formatMessage, setLocale, locale } = useLocale();
  const [inputValueState, setInputValueState] = useState(initialSearch);

  useEffect(() => {
    if (initialSearch !== inputValueState) {
      setInputValueState(initialSearch);
    }
  }, [initialSearch]);

  return (
    <Styled.HeaderWrapper>
      <Styled.Header>
        <Styled.Logo href="/">
          <img src={logo} alt={formatMessage({ id: 'header.logoAlt' })} />
          <span>{formatMessage({ id: 'header.logoText' })}</span>
        </Styled.Logo>
        <Styled.Form
          onSubmit={(event) => {
            event.preventDefault();
            onSubmit(inputValueState);
          }}
        >
          <Input
            value={inputValueState}
            placeholder={formatMessage({ id: 'header.searchInputPlaceholder' })}
            onChange={(event) => {
              setInputValueState(event.target.value);
            }}
          />
          <Button type="submit">{formatMessage({ id: 'header.searchButtonText' })}</Button>
        </Styled.Form>
        <div>
          {appLocaleValues.map((localeValue, index) => (
            <span key={localeValue}>
              <LocaleButton
                text={localeValue}
                isActive={localeValue === locale}
                onClick={() => {
                  setLocale(localeValue);
                }}
              />
              {index < localeValue.length - 1 && ' | '}
            </span>
          ))}
        </div>
      </Styled.Header>
    </Styled.HeaderWrapper>
  );
};
