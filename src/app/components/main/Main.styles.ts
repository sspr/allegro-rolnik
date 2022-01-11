import styled, { css } from 'styled-components';

export const Main = styled.main`
  ${({ theme: { color, screenResolution } }) => css`
    flex-basis: 75%;
    max-width: 75%;
    width: 75%;
    background-color: ${color.background.white};
    padding: 16px;

    @media (max-width: ${screenResolution.medium}) {
      flex-basis: 66.66667%;
      max-width: 66.66667%;
      width: 66.66667%;
    }

    @media (max-width: ${screenResolution.small}) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      order: -1;
    }
  `}
`;

export const FiltersSwitch = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 8px;
`;
