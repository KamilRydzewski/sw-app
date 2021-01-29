import GameTemplate from "src/templates/GameTemplate";
import GameCard from "src/components/commonUI/GameCard/GameCard";
import BaseButton from "src/components/baseUI/BaseButton/BaseButton";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  margin: 20px;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
  }
`;
const RandomPlayer = () => {
  // const dispatch = useDispatch();
  // const handle = () => dispatch(GetStarships());
  return (
    <GameTemplate>
      <StyledCardWrapper>
        <GameCard title="fdffd" params={["d", "dsds"]}></GameCard>
      </StyledCardWrapper>
      <BaseButton>Start Game</BaseButton>
      <StyledCardWrapper>
        <GameCard title="fdffd" params={["d", "dsds"]}></GameCard>{" "}
      </StyledCardWrapper>
    </GameTemplate>
  );
};

export default RandomPlayer;
