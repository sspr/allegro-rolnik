import styled, { css } from 'styled-components';

export const SignleCategory = styled.span`
  display: flex;
  justify-content: space-between;
  padding: 0 0 8px 0;
`;

export const SingleCategoryName = styled.button`
  ${({ theme: { fontSize, color } }) => css`
    font-family: 'Open Sans', sans-serif;
    font-size: ${fontSize.primary};
    background-color: transparent;
    border: none;
    padding: 0;

    &:hover {
      color: ${color.secondaryLight};
      cursor: pointer;
    }

    &.active {
      color: ${color.primary};
      cursor: default;
    }
  `}
`;

export const SignleCategoryCount = styled.span`
  color: ${({ theme }) => theme.color.text.grey};
`;

export const GoBack = styled.div`
  padding-bottom: 16px;
`;

export const GoBackButton = styled.button`
  ${({ theme: { fontSize, color } }) => css`
    font-family: 'Open Sans', sans-serif;
    font-size: ${fontSize.primary};
    color: ${color.secondary};
    background-color: transparent;
    border: none;
    padding: 0;

    &:hover {
      color: ${color.secondaryLight};
      cursor: pointer;
    }
  `}
`;
