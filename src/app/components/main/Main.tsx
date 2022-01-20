import { useLocale } from 'hooks';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';
import { ProductsListContainer } from '../product/productsList/ProductsListContainer';
import { Pagination } from 'ui';
import { useState } from 'react';
import { NumberParam, useQueryParams, withDefault } from 'use-query-params';
import { defaultProductParams } from 'api/product/defaultParams';

export const Main = ({ isScreenMobile, onFilterClick }: MainProps) => {
  const { formatMessage } = useLocale();
  const [productsCount, setProductsCount] = useState<number | undefined>(undefined);
  const [query, setQuery] = useQueryParams({
    page: withDefault(NumberParam, defaultProductParams.page),
    perPage: withDefault(NumberParam, defaultProductParams.perPage),
  });

  const updatePageQuery = (page: number) => {
    setQuery({ page });
  };

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.FiltersSwitch onClick={onFilterClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.FiltersSwitch>
      )}
      <ProductsListContainer onDataFetch={setProductsCount} productsUrlParams={query} />
      <Pagination
        pageCount={query.perPage && productsCount ? Math.ceil(productsCount / query.perPage) : 1}
        currentPage={query.page || 1}
        onPageClick={updatePageQuery}
      />
    </Styled.Main>
  );
};
