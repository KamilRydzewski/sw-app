import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetStarships } from "src/actions/starship/StarshipActions";
import MainNavigation from "src/components/commonUI/Navigation/MainNavigation";
import { ReactComponent as StarWarsLogo } from "src/assets/images/star-wars.svg";
import styled from "styled-components";

const StyledLogo = styled(StarWarsLogo)`
  width: 100%;
  height: 300px;
  overflow: hidden;
  & path:first-child {
    fill: transparent;
  }
  & path:last-child {
    fill: white;
  }

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    height: 200px;
  }
`;

const Menu: React.FC = () => {
  const dispatch = useDispatch();
  const handle = () => dispatch(GetStarships());
  return (
    <>
      <StyledLogo />
      <MainNavigation></MainNavigation>
    </>
  );
};

export default Menu;
