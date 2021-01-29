import styled from "styled-components";

const BaseMenuLink = styled.button`
  color: ${({ theme }) => theme.yellow};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  padding: 10px;
  background: transparent;
  font-family: "Poller One", cursive;
  border: none;
  text-decoration: none;
  display: block;

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export default BaseMenuLink;
