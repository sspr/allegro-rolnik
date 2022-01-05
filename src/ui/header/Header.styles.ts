import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.color.border.lightgrey};
`;

export const Header = styled.div`
  max-width: 1200px;
  padding: 16px 24px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Logo = styled.div`
  display: flex;
  align-items: top;
  gap: 5px;
  color: ${({ theme }) => theme.color.primary};
  font-weight: 600;
  font-size: 18px;
  user-select: none;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.screenResolution.mobile}) {
    order: 3;
    flex: 1 0 100%;
    padding-top: 16px;

    input {
      width: 100%;
    }
  }
`;
