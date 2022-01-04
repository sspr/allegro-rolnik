import styled from 'styled-components';
import { Theme } from '../../../assets/styles/theme.types';

export const LocaleButton = styled.button<{ theme: Theme }>`
  font-size: ${({ theme }) => theme.fontSize.primary};
  color: ${({ theme }) => theme.color.text.black};
  text-transform: uppercase;
  border: none;
  background-color: transparent;

  &.active {
    font-weight: 600;
  }

  &.not-active:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.color.secondary};
  }
`;
