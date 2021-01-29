import { NavLink, Redirect } from "react-router-dom";
import BaseMenuLink from "src/components/baseUI/BaseLinks/BaseMenuLink";
import styled, { css } from "styled-components";
import { NavigationSchema } from "./NavigationSchema";
import { getKeyPressed } from "src/utils/keyboardUtils";
import { useState, useEffect } from "react";

const StyledNavList = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

interface IStyledNavItem {
  focused?: boolean;
}

const StyledNavItem = styled.li<IStyledNavItem>`
  transition: 0.3s ease;
  &:not(:last-child) {
    margin-bottom: 30px;
  }
  ${({ focused }) =>
    focused &&
    css`
      @media all and (min-width: ${({ theme }) => theme.bpMobile}) {
        transform: scale(1.2);
      }
    `}
`;
const MainNavigation: React.FC = () => {
  const [focused, setFocused] = useState(0);
  const downPress = getKeyPressed("ArrowDown");
  const upPress = getKeyPressed("ArrowUp");
  const enterPress = getKeyPressed("Enter");

  useEffect(() => {
    if (NavigationSchema.length && downPress) {
      setFocused((prevState) =>
        prevState < NavigationSchema.length - 1 ? prevState + 1 : prevState
      );
    }
  }, [downPress]);
  useEffect(() => {
    if (NavigationSchema.length && upPress) {
      setFocused((prevState) => (prevState > 0 ? prevState - 1 : prevState));
    }
  }, [upPress]);
  return enterPress ? (
    <Redirect push to={NavigationSchema[focused].to} />
  ) : (
    <StyledNavList>
      {NavigationSchema.map((link, index) => (
        <StyledNavItem
          focused={focused === index}
          onMouseEnter={() => setFocused(index)}
        >
          <BaseMenuLink as={NavLink} to={link.to}>
            {link.name}
          </BaseMenuLink>
        </StyledNavItem>
      ))}
    </StyledNavList>
  );
};

export default MainNavigation;
