import styled, { css } from 'styled-components';

export const PaginationLink = styled.button`
  ${({ theme: { color, fontSize } }) => css`
    background-color: transparent;
    border: none;
    padding: 0 8px;
    font-size: ${fontSize.primary};

    &:hover {
      color: ${color.secondaryLight};
      cursor: pointer;
    }

    &.active {
      color: ${color.primary};
    }

    &.active:hover {
      color: ${color.primary};
      cursor: default;
    }
  `}
`;
