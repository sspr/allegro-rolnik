import styled from 'styled-components';
import { Theme } from '../../assets/styles/theme.types';

export const Input = styled.input<{ theme: Theme }>`
  width: 290px;
  height: 40px;
  line-height: 40px;
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  border-right: none;
  color: ${({ theme }) => theme.color.text.black};
  font-family: 'Open Sans', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.primary};
  outline: none;
  box-sizing: border-box;
  padding: 0 8px;

  &::placeholder {
    font-family: 'Open Sans', sans-serif;
  }
`;
