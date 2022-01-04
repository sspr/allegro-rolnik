import styled from 'styled-components';
import { Theme } from '../assets/styles/theme.types';

export const Wrapper = styled.div<{ theme: Theme }>`
  background-color: ${({ theme }) => theme.color.background};
  padding: 16px 0;
`;

export const Content = styled.div<{ theme: Theme }>`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  gap: 16px;

  @media (max-width: 760px) {
    flex-wrap: wrap;
  }
`;
