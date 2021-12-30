import { useIntl } from 'react-intl';

export const App = () => {
  let { formatMessage } = useIntl();

  return (
    <>
      <h2>This is a header 2</h2>
      <h3>This is a header 3</h3>
      <p>This is translated statement: {formatMessage({ id: 'test.helloWorld' })}</p>
    </>
  );
};
