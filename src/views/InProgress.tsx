import styled from "styled-components";
import { ReactComponent as Robo } from "src/assets/images/robo.svg";

const StyledRobo = styled(Robo)`
  width: 500px;
  height: 500px;
  & * {
    fill: white;
  }
  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    width: 300px;
    height: 300px;
  }
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    width: 200px;
    height: 200px;
  }
`;
const StyledTitle = styled.h1`
  color: ${({ theme }) => theme.white};
  text-align: center;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.xl};
  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InProgress: React.FC = () => {
  return (
    <StyledWrapper>
      <StyledRobo></StyledRobo>
      <StyledTitle>In Progress...</StyledTitle>
    </StyledWrapper>
  );
};

export default InProgress;
