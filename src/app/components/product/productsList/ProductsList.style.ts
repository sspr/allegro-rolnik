import { theme } from 'assets/styles/theme.styles';
import styled, { css, keyframes } from 'styled-components';

export const ProductsList = styled.div`
  padding: 24px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  ${({ theme: { color } }) => css`
    display: block;
    width: 40px;
    height: 40px;
    margin: auto;

    &:after {
      content: ' ';
      display: block;
      width: 32px;
      height: 32px;
      margin: 4px;
      border-radius: 50%;
      border: 6px solid ${theme.color.text.grey};
      border-color: ${theme.color.text.grey} ${theme.color.text.grey} transparent transparent;
      animation: ${rotate} 1.2s linear infinite;
    }
  `}
`;

export const Message = styled.div`
  text-align: center;
`;
