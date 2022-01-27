import { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Checkbox, RangeInput } from 'ui';
import * as Styled from './Price.styles';
import { PriceProps } from './Price.type';

export const Price = ({ onInputChange, minPrice, maxPrice }: PriceProps) => {
  const { formatMessage } = useIntl();

  const [minPriceState, setMinPriceState] = useState(minPrice);
  const [maxPriceState, setMaxPriceState] = useState(maxPrice);

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

  useEffect(() => {
    const timer = setTimeout(() => onInputChange({ minPrice: minPriceState }), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [minPriceState]);

  useEffect(() => {
    const timer = setTimeout(() => onInputChange({ maxPrice: maxPriceState }), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [maxPriceState]);

  return (
    <>
      <h3>{formatMessage({ id: 'filters.price' })}</h3>
      <Styled.Price>
        {(minPrice || maxPrice) && (
          <Checkbox
            data-testid="checkbox"
            isChecked={minPrice || maxPrice ? true : false}
            label=""
            onClick={() => {
              onInputChange({ minPrice: undefined });
              onInputChange({ maxPrice: undefined });
              setMaxPriceState(undefined);
              setMinPriceState(undefined);
            }}
          />
        )}
        <RangeInput
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
      </Styled.Price>
    </>
  );
};
