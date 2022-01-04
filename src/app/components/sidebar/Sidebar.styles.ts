import styled from 'styled-components';
import { Theme } from '../../../assets/styles/theme.types';

export const Sidebar = styled.div<{ theme: Theme }>`
  flex-basis: 25%;
  max-width: 25%;
  width: 25%;
  background-color: #fff;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 991px) {
    flex-basis: 33.33333%;
    max-width: 33.33333%;
    width: 33.33333%;
  }

  @media (max-width: 786px) {
    flex-basis: 100%;
    max-width: 100%;
    width: 100%;
    position: absolute;
    top: 0;
  }
`;

export const FiltersCardCloser = styled.div<{ theme: Theme }>`
  color: ${({ theme }) => theme.color.text.primary};
  font-size: 20px;
  line-height: 20px;
  padding: 16px;
  background-color: #fff;
  position: fixed;
  top: 0;
  right: 0;
`;
