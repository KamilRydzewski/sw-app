import Stars from "./Stars";
import Twinkling from "./Twinkling";
import styled from "styled-components";

const StyledBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
`;

const GalaxyBackground: React.FC = () => {
  return (
    <>
      <StyledBackgroundContainer>
        <Stars></Stars>
        <Twinkling></Twinkling>
      </StyledBackgroundContainer>
    </>
  );
};

export default GalaxyBackground;
