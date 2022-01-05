import styled, { css } from 'styled-components';
import { Theme } from 'assets/styles/theme.types';

export const Sidebar = styled.div<{ theme: Theme }>`
  ${({ theme: { color, width } }) => css`
    flex-basis: 25%;
    max-width: 25%;
    width: 25%;
    background-color: ${color.background.white};
    padding: 16px;
    box-sizing: border-box;

    @media (max-width: ${width.small}) {
      flex-basis: 33.33333%;
      max-width: 33.33333%;
      width: 33.33333%;
    }

    @media (max-width: ${width.mobile}) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      position: absolute;
      top: 0;
    }
  `}
`;

export const FiltersCardCloser = styled.div<{ theme: Theme }>`
  ${({ theme: { color } }) => css`
    color: ${color.text.primary};
    font-size: 20px;
    line-height: 20px;
    padding: 16px;
    background-color: ${color.background.white};
    position: fixed;
    top: 0;
    right: 0;
  `}
`;
