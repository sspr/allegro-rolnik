import { AppLocale } from '../context/locale/appLocale.enum';
import { useLocale } from '../hooks/useLocale';

export const App = () => {
  let { formatMessage, locale, setLocale } = useLocale();

  const changeLanguageHandler = () => {
    setLocale(locale === AppLocale.pl ? AppLocale.en : AppLocale.pl);
  };

  return (
    <>
      <h2>This is a header 2</h2>
      <h3>This is a header 3</h3>
      <p>This is translated statement: {formatMessage({ id: 'test.helloWorld' })}</p>
      <button onClick={changeLanguageHandler}>Change language</button>
    </>
  );
};
