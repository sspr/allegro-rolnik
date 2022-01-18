import { useLocale } from 'hooks';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';
import { ProductsListContainer } from '../product/productsList/ProductsListContainer';
import { Pagination } from 'ui/pagination/Pagination';
import { useState } from 'react';

export const Main = ({ isScreenMobile, onFilterClick }: MainProps) => {
  const { formatMessage } = useLocale();
  const [productsCount, setProductsCount] = useState<number | undefined>(undefined);

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.FiltersSwitch onClick={onFilterClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.FiltersSwitch>
      )}
      <ProductsListContainer setProductsCount={setProductsCount} />
      <Pagination productsCount={productsCount} />
    </Styled.Main>
  );
};
