import styled, { css } from "styled-components";

type ButtonTypes = {
  disabled?: boolean;
};

const BaseButton = styled.button<ButtonTypes>`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  ${({ disabled }) =>
    disabled &&
    css`
     opacity: 0.7;
     pointer-events: none;
      }
    `}

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
    transition: all 0.3s ease;
    background: transpaernt;
  }

  &::before {
    background: ${({ theme }) => theme.yellow};
    z-index: -1;
  }
  &::after {
    border: 2px solid ${({ theme }) => theme.yellow};
  }
  &:focus {
    outline: none;
  }
  &:hover::after,
  &:active::before {
    height: calc(100% + 10px);
    width: calc(100% + 10px);
  }
`;
export default BaseButton;
