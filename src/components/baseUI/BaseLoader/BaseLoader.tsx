import { ReactComponent as LoaderIcon } from "src/assets/images/yoda.svg";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
   0% {
    transform: rotateZ(-20deg);
}
100% {
      transform: rotateZ(360deg);
  }
  
`;
const StyledWrapper = styled.div``;
const StyledLoader = styled(LoaderIcon)`
  width: 200px;
  height: 200px;
  transition: all 0.3s ease;
  animation: ${rotate} 1.5s ease alternate infinite;

  & * {
    fill: white;
  }
  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 130px;
    height: 130px;
  }
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    width: 100px;
    height: 100px;
  }
`;
const BaseLoader: React.FC = () => {
  return (
    <StyledWrapper data-testid="base-loader">
      <StyledLoader></StyledLoader>;
    </StyledWrapper>
  );
};

export default BaseLoader;
