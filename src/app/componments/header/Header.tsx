import * as Styled from './Header.styles';
import logo from '../../../assets/images/logo.svg';
import { Input } from '../../../ui/input/Input';
import { Button } from '../../../ui/button/Button';
import { AppLocale } from '../../../context/locale/appLocale.enum';
import { LocaleButton } from './LocaleButton';

export const Header = () => {
  const appLocaleValues = Object.values<AppLocale>(AppLocale);

  return (
    <Styled.HeaderWrapper>
      <Styled.Header>
        <Styled.Logo>
          <img src={logo} alt="Allegro farmer - convenient and safe online shopping for farmers" />
          <span>farmer</span>
        </Styled.Logo>
        <Styled.Form>
          <Input placeholder="what are you looking for?" />
          <Button type="submit">search</Button>
        </Styled.Form>
        <div>
          {appLocaleValues.map((localeValue, index) => (
            <LocaleButton
              key={localeValue}
              localeButtonValue={localeValue}
              hasBorder={index < appLocaleValues.length - 1 ? true : false}
            />
          ))}
        </div>
      </Styled.Header>
    </Styled.HeaderWrapper>
  );
};
