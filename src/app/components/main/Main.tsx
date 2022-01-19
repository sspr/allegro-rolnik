import { useLocale } from 'hooks';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';
import { ProductsListContainer } from '../product/productsList/ProductsListContainer';
import { Pagination } from 'ui';
import { useState } from 'react';
import { useUrlParams } from 'hooks';

export const Main = ({ isScreenMobile, onFilterClick }: MainProps) => {
  const { formatMessage } = useLocale();
  const [productsCount, setProductsCount] = useState<number | undefined>(undefined);

  const { urlParams, changeUrlParams } = useUrlParams();

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.FiltersSwitch onClick={onFilterClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.FiltersSwitch>
      )}
      <ProductsListContainer onDataFetch={setProductsCount} productsUrlParams={urlParams} />
      <Pagination
        pageCount={urlParams.perPage && productsCount ? Math.ceil(productsCount / urlParams.perPage) : 1}
        currentPage={urlParams.page || 1}
        onPageClick={changeUrlParams}
      />
    </Styled.Main>
  );
};
