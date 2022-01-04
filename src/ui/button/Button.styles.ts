import styled from 'styled-components';
import { Theme } from '../../assets/styles/theme.types';

export const Button = styled.button<{ theme: Theme }>`
  height: 40px;
  padding: 0 13px;
  background: ${({ theme }) => theme.color.primary};
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.primary};
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primaryLight};
    cursor: pointer;
  }
`;
