import styled, { css } from 'styled-components';

export const Pagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 24px 24px 0;
  font-weight: 500;
`;

export const Previous = styled.button`
  ${({ theme: { color, fontSize } }) => css`
    display: flex;
    align-items: center;
    padding: 0 16px 0 0;
    color: ${color.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: transparent;
    border: none;
    font-size: ${fontSize.primary};

    &:hover {
      color: ${color.secondaryLight};
      cursor: pointer;
    }

    img {
      width: 32px;
      height: 32px;
      transform: rotate(180deg);
    }
  `}
`;

export const Next = styled.button`
  ${({ theme: { color, fontSize } }) => css`
    display: flex;
    align-items: center;
    padding: 0 0 0 16px;
    color: ${color.secondary};
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: transparent;
    border: none;
    font-size: ${fontSize.primary};

    &:hover {
      color: ${color.secondaryLight};
      cursor: pointer;
    }

    img {
      width: 32px;
      height: 32px;
    }
  `}
`;

export const Label = styled.span`
  padding: 0 8px;
`;
