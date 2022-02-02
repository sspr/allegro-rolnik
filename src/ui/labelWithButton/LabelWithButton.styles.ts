import styled from 'styled-components';

export const LabelWithButton = styled.div`
  border: 1px solid ${({ theme }) => theme.color.border.grey};
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  max-width: fit-content;
  margin: 0 8px 8px 0;
  padding: 1px;

  &:hover {
    border-width: 2px;
    padding: 0;
  }
`;

export const Label = styled.span`
  padding: 12px 0 12px 8px;
`;

export const Prefix = styled.span`
  color: ${({ theme }) => theme.color.text.grey};
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  max-height: 32px;
  padding: 0;

  &:hover {
    cursor: pointer;
  }

  &:hover ~ ${Label} {
    text-decoration: line-through;
  }
`;
