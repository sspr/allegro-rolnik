import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.background.grey};
  padding: 16px 0;
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

export const Sidebar = styled.div`
  ${({ theme: { color, screenResolution } }) => css`
    flex-basis: 25%;
    max-width: 25%;
    width: 25%;
    background-color: ${color.background.white};
    padding: 16px;
    box-sizing: border-box;

    @media (max-width: ${screenResolution.medium}) {
      flex-basis: 33.33333%;
      max-width: 33.33333%;
      width: 33.33333%;
    }

    @media (max-width: ${screenResolution.small}) {
      flex-basis: 100%;
      max-width: 100%;
      width: 100%;
      position: absolute;
      top: 0;
    }
  `}
`;

export const FiltersCardCloser = styled.div`
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

export const Filters = styled.div`
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 8px;
`;
