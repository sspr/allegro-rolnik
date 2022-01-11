import { useLocale } from 'hooks';
import { ProductsList } from '../product/productsList/ProductsList';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';

export const Main = ({ isScreenMobile, onFilterClick }: MainProps) => {
  const { formatMessage } = useLocale();

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.FiltersSwitch onClick={onFilterClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.FiltersSwitch>
      )}
      <ProductsList />
    </Styled.Main>
  );
};