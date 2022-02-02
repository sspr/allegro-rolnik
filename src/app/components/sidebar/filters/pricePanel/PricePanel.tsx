import { useDebounceState } from 'hooks';
import { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Checkbox } from 'ui';
import { RangeInput } from '../rangeInput/RangeInput';
import * as Styled from './PricePanel.styles';
import { PricePanelProps } from './PricePanel.type';

export const PricePanel = ({ onInputChange, minPrice, maxPrice }: PricePanelProps) => {
  const { formatMessage } = useIntl();

  const [minPriceState, setMinPriceState] = useDebounceState({
    onDebounceChange: (value) => onInputChange({ minPrice: value }),
    initialValue: minPrice,
    debounceTime: 1000,
  });
  const [maxPriceState, setMaxPriceState] = useDebounceState({
    onDebounceChange: (value) => onInputChange({ maxPrice: value }),
    initialValue: maxPrice,
    debounceTime: 1000,
  });

  useEffect(() => {
    if (!minPrice) {
      setMinPriceState(minPrice);
    }
  }, [minPrice]);

  useEffect(() => {
    if (!maxPrice) {
      setMaxPriceState(maxPrice);
    }
  }, [maxPrice]);

  return (
    <>
      <h3>{formatMessage({ id: 'filters.price' })}</h3>
      <Styled.PricePanel>
        {(minPrice || maxPrice) && (
          <Checkbox
            data-testid="checkbox"
            isChecked={true}
            label=""
            name="priceRangeCheckbox"
            onClick={() => {
              onInputChange({ minPrice: undefined });
              onInputChange({ maxPrice: undefined });
              setMaxPriceState(undefined);
              setMinPriceState(undefined);
            }}
          />
        )}
        <RangeInput
          data-testid="inputMinPrice"
          onChange={(event) => {
            setMinPriceState(Number(event.target.value));
          }}
          type="number"
          min="0"
          label={formatMessage({ id: 'filters.minPrice' })}
          value={minPriceState ? minPriceState : ''}
        />
        <span>-</span>
        <RangeInput
          onChange={(event) => {
            setMaxPriceState(Number(event.target.value));
          }}
          min="0"
          type="number"
          label={formatMessage({ id: 'filters.maxPrice' })}
          value={maxPriceState ? maxPriceState : ''}
        />
      </Styled.PricePanel>
    </>
  );
};
