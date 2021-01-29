import GameTemplate from "src/templates/GameTemplate";
import GameCard from "src/components/commonUI/GameCard/GameCard";
import BaseButton from "src/components/baseUI/BaseButton/BaseButton";
import { useDispatch, useSelector } from "react-redux";
import { RootStoreType } from "src/store/index";
import { GetStarships } from "src/actions/starship/StarshipActions";
import styled from "styled-components";

const StyledCardWrapper = styled.div`
  margin: 20px;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
  }
`;
const RandomPlayer = () => {
  const dispatch = useDispatch();
  const handle = () => dispatch(GetStarships());
  const pokemonState = useSelector((state: RootStoreType) => state.starships);
  return (
    <GameTemplate>
      <StyledCardWrapper>
        <GameCard title="fdffd" params={["d", "dsds"]}></GameCard>
      </StyledCardWrapper>
      <BaseButton onClick={handle}>Start Game</BaseButton>
      <StyledCardWrapper>
        <GameCard title="fdffd" params={["d", "dsds"]}></GameCard>{" "}
      </StyledCardWrapper>
    </GameTemplate>
  );
};

export default RandomPlayer;
