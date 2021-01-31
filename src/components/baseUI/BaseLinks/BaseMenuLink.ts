import styled, { css } from "styled-components";

type MenuLinkType = {
  disabled?: boolean;
};

const BaseMenuLink = styled.button<MenuLinkType>`
  color: ${({ theme }) => theme.yellow};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 10px;
  background: transparent;
  font-family: "Poller One", cursive;
  border: none;
  text-decoration: none;
  display: block;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
      pointer-events: none;
    `}

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default BaseMenuLink;
