import styled, { keyframes } from "styled-components";

const blow = keyframes`
  0% {
    height: 100%;
    width: 100%;
	}
    35%{
    height: 100%;
    width: 100%; 
    }
	50% { 
    height: calc(100% + 10px);
    width: calc(100% + 10px);
	}
    65%{
    height: 100%;
    width: 100%; 
    }
    100%{
    height: 100%;
    width: 100%;
    }
`;

const BaseButton = styled.button`
  background-color: ${({ theme }) => theme.yellow};
  color: ${({ theme }) => theme.white};
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

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
