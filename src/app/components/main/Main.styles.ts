import styled from 'styled-components';
import { Theme } from '../../../assets/styles/theme.types';

export const Main = styled.main<{ theme: Theme }>`
  flex-basis: 75%;
  max-width: 75%;
  width: 75%;
  background-color: #fff;
  padding: 16px;

  @media (max-width: 991px) {
    flex-basis: 66.66667%;
    max-width: 66.66667%;
    width: 66.66667%;
  }

  @media (max-width: 786px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    order: -1;
  }
`;

export const Filters = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.color.secondary};
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 8px;
`;
