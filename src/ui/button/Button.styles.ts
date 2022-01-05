import styled, { css } from 'styled-components';

export const Button = styled.button`
  ${({ theme: { color, fontSize } }) => css`
    height: 40px;
    padding: 0 13px;
    background: ${color.primary};
    color: ${color.text.white};
    font-family: 'Open Sans', sans-serif;
    font-size: ${fontSize.primary};
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    border: none;

    &:hover {
      background-color: ${color.primaryLight};
      cursor: pointer;
    }
  `}
`;
