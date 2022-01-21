import { useIntl } from 'react-intl';
import { LabelWithCount } from 'ui/labelWithCount/LabelWithCount';
import * as Styled from './Categories.styles';
import { CategoriesProps } from './Categories.types';
import { CATEGORY_MOCK } from '../../../../tests/categoriesMock';

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
      {CATEGORY_MOCK.map((category) => (
        <LabelWithCount count={category.count} key={category.name}>
          <Styled.SingleCategoryName
            className={activeCategory === category.name ? 'active' : ''}
            onClick={() => {
              if (activeCategory !== category.name) {
                onCategoryClick(category.name);
              }
            }}
          >
            {formatMessage({ id: `categories.${category.name}` })}
          </Styled.SingleCategoryName>
        </LabelWithCount>
      ))}
    </>
  );
};
