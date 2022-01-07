import styled from 'styled-components';

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
