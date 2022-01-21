import { useLocale } from 'hooks';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';
import { ProductsListContainer } from '../product/productsList/ProductsListContainer';
import { Pagination } from 'ui';
import { useState } from 'react';

export const Main = ({ isScreenMobile, onFilterClick, productsQuery, changeCurrentPage }: MainProps) => {
  const { formatMessage } = useLocale();
  const [productsCount, setProductsCount] = useState<number | undefined>(undefined);

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.FiltersSwitch onClick={onFilterClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.FiltersSwitch>
      )}
      <ProductsListContainer onDataFetch={setProductsCount} productsUrlParams={productsQuery} />
      <Pagination
        pageCount={productsQuery.perPage && productsCount ? Math.ceil(productsCount / productsQuery.perPage) : 1}
        currentPage={productsQuery.page || 1}
        onPageClick={changeCurrentPage}
      />
    </Styled.Main>
  );
};
