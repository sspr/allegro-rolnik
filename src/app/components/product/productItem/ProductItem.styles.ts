import styled, { css } from 'styled-components';

export const ProductItem = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgrey};
`;

export const Container = styled.div`
  padding: 10px 8px;
  display: flex;
  gap: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.color.background};
    cursor: pointer;
  }
`;

export const Photo = styled.div`
  flex: 0 0 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.screenResolution.medium}) {
    flex: 0 0 128px;
    height: 128px;
  }
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ProductName = styled.div`
  &:hover {
    color: ${({ theme }) => theme.color.secondaryLight};
  }
`;

export const ConditionLabel = styled.span`
  ${({ theme: { fontSize, color } }) => css`
    font-size: ${fontSize.secondary};
    color: ${color.text.grey};
  `}
`;

export const ConditionText = styled.span`
  font-size: ${({ theme }) => theme.fontSize.secondary};
`;

export const PriceInteger = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.darkgrey};
`;

export const PriceDecimal = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 21px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.text.darkgrey};
`;
