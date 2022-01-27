import styled, { css } from 'styled-components';

export const Container = styled.span`
  position: relative;
`;

export const RangeInput = styled.input`
  ${({ theme: { color, fontSize } }) => css`
    width: 100%;
    height: 40px;
    border: 1px solid ${color.border.grey};
    border-radius: 2px;
    color: ${color.text.black};
    font-family: 'Open Sans', sans-serif;
    font-size: ${fontSize.primary};
    outline: none;
    box-sizing: border-box;
    padding: 1px 8px;

    -moz-appearance: textfield;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &::placeholder {
      font-family: 'Open Sans', sans-serif;
    }

    &:hover,
    &:focus {
      padding: 0 7px;
      border: 2px solid ${color.text.grey};
    }

    &:not(:placeholder-shown) ~ ${Label}, &:focus ~ ${Label} {
      top: -10px;
    }
    &[value='0'] {
      top: 0;
    }
  `}
`;

export const Label = styled.label`
  ${({ theme: { color } }) => css`
    color: ${color.text.grey};
    position: absolute;
    line-height: 20px;
    top: 10px;
    left: 8px;
    padding: 0 2px;
    transition-duration: 0.2s;
    background-color: ${color.text.white};
  `}
`;
