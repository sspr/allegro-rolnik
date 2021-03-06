import { useIntl } from 'react-intl';
import { LabelWithCount } from 'ui';
import * as Styled from './Categories.styles';
import { CategoriesProps } from './Categories.types';
import { ProductCategory } from 'api/product/product.types';
import { CATEGORY_MOCK } from 'tests/mock/categoriesMock';

export const Categories = ({ onCategoryClick, activeCategory }: CategoriesProps) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <h2>{formatMessage({ id: 'categories.categories' })}</h2>
      {activeCategory && (
        <Styled.GoBack>
          {formatMessage({ id: 'categories.goBackTo' })}{' '}
          <Styled.GoBackButton
            onClick={() => {
              onCategoryClick(activeCategory);
            }}
          >
            {formatMessage({ id: 'categories.allMachines' })}
          </Styled.GoBackButton>
        </Styled.GoBack>
      )}
      {Object.values(ProductCategory).map((category, index) => (
        <LabelWithCount count={CATEGORY_MOCK[index].count} key={category}>
          <Styled.SingleCategoryName
            className={activeCategory === category ? 'active' : ''}
            onClick={() => {
              if (activeCategory !== category) {
                onCategoryClick(category);
              }
            }}
          >
            {formatMessage({ id: `categories.${category}` })}
          </Styled.SingleCategoryName>
        </LabelWithCount>
      ))}
    </>
  );
};
