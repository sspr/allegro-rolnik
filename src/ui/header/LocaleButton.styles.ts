import styled, { css } from 'styled-components';
import { Theme } from 'assets/styles/theme.types';

export const LocaleButton = styled.button<{ theme: Theme }>`
  ${({ theme: { fontSize, color } }) => css`
    font-size: ${fontSize.primary};
    color: ${color.text.black};
    text-transform: uppercase;
    border: none;
    background-color: transparent;

    &.active {
      font-weight: 600;
    }

    &.not-active:hover {
      cursor: pointer;
      color: ${color.secondary};
    }
  `}
`;
