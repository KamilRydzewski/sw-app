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
  return (
    <>
      <StyledLogo />
      <MainNavigation></MainNavigation>
    </>
  );
};

export default Menu;
