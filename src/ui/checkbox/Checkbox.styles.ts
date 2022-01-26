import styled, { css } from 'styled-components';

export const Checkmark = styled.span`
  ${({ theme: { color } }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${color.border.grey};
    border-radius: 2px;
    box-sizing: border-box;

    &:after {
      content: '';
      position: absolute;
      display: none;
      left: 5px;
      top: 0;
      width: 5px;
      height: 10px;
      border: solid ${color.primary};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
    &:before {
      content: '';
      position: absolute;
      left: 1px;
      top: 1px;
      width: 15px;
      height: 15px;
      background-color: ${color.text.white};
      transition-duration: 0.2s;
      z-index: 10;
    }

    &.checked {
      border: 2px solid ${({ theme }) => theme.color.primary};
    }

    &.checked:after {
      display: block;
    }

    &.checked:before {
      width: 0;
      left: 15px;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme: { color } }) => css`
    display: block;
    position: relative;
    padding-left: 30px;
    cursor: pointer;
    margin: 6px 0;

    &:hover ${Checkmark} {
      border: 2px solid ${color.text.grey};
    }

    &:active,
    &:active ${Checkmark} {
      opacity: 0.5;
    }
  `}
`;

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
