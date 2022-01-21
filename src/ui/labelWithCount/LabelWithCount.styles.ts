import styled from 'styled-components';

export const LabelWithCount = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 8px 0;
`;

export const Count = styled.span`
  color: ${({ theme }) => theme.color.text.grey};
`;
