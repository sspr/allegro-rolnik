import { useLocale } from 'hooks';
import * as Styled from './Main.styles';
import { MainProps } from './Main.types';
import { ProductsListContainer } from '../product/productsList/ProductsListContainer';
import { Pagination } from 'ui';
import { useState } from 'react';

export const Main = ({ isScreenMobile, onMobileSidebarSwitchClick, productsParams, onPageClick }: MainProps) => {
  const { formatMessage } = useLocale();
  const [productsCount, setProductsCount] = useState<number | undefined>(undefined);

  return (
    <Styled.Main>
      {isScreenMobile && (
        <Styled.MobileSidebarSwitch onClick={onMobileSidebarSwitchClick}>
          {formatMessage({ id: 'main.filterSwitch' })}
        </Styled.MobileSidebarSwitch>
      )}
      <ProductsListContainer onDataFetch={setProductsCount} productsUrlParams={productsParams} />
      <Pagination
        pageCount={productsParams.perPage && productsCount ? Math.ceil(productsCount / productsParams.perPage) : 1}
        currentPage={productsParams.page || 1}
        onPageClick={onPageClick}
      />
    </Styled.Main>
  );
};
