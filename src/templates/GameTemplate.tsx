import styled from "styled-components";

const StyledSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    flex-direction: column;
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    flex-direction: column;
  }
`;

const GameTemplate: React.FC = ({ children }) => {
  return (
    <StyledSection>
      <StyledWrapper>{children}</StyledWrapper>
    </StyledSection>
  );
};

export default GameTemplate;
