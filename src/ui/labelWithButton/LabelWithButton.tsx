import * as Styled from './LabelWithButton.styles';
import { LabelWithButtonProps } from './LabelWithButton.types';
import x from 'assets/images/x.svg';
import { useIntl } from 'react-intl';

export const LabelWithButton = ({ text, prefix, onClick }: LabelWithButtonProps) => {
  const { formatMessage } = useIntl();
  return (
    <Styled.LabelWithButton>
      <Styled.CloseButton onClick={onClick}>
        <img src={x} alt={formatMessage({ id: 'labelWithButton.close' })} />
      </Styled.CloseButton>
      <Styled.Label>
        {prefix && <Styled.Prefix>{`${prefix}: `}</Styled.Prefix>}
        <span>{text}</span>
      </Styled.Label>
    </Styled.LabelWithButton>
  );
};
