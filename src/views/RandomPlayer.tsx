import GameTemplate from "src/templates/GameTemplate";
import GameCard from "src/components/commonUI/GameCard/GameCard";
import BaseButton from "src/components/baseUI/BaseButton/BaseButton";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootStoreType } from "src/store/index";
import styled from "styled-components";
import { getRandomObj } from "src/utils/commonUtils";
import { StarshipType } from "src/actions/starship/StarshipActionTypes";
import { PeopleType } from "src/actions/people/PeopleActionTypes";
import BaseSelect from "src/components/baseUI/BaseSelect/BaseSelect";
import { type } from "os";

const StyledCardWrapper = styled.div`
  margin: 20px;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
  }
`;

type CardsState = {
  leftCard: {
    type: string;
    data: (StarshipType & PeopleType) | undefined;
  };
  rightCard: {
    type: string;
    data: (StarshipType & PeopleType) | undefined;
  };
  [key: string]: any;
};
const initialState = {
  leftCard: {
    data: undefined,
    type: "All",
  },
  rightCard: {
    data: undefined,
    type: "All",
  },
};
const RandomPlayer = () => {
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peoplesState = useSelector((state: RootStoreType) => state.peoples);
  const [cards, setCards] = useState<CardsState>(initialState);

  useEffect(() => {}, [cards]);

  const setCardType = (value: string, cardType: string) => {
    //change type and return rest of object
    setCards(() => {
      return {
        ...cards,
        [cardType]: {
          ...cards[cardType],
          type: value,
        },
      };
    });
  };
  const shuffleCards = () => {
    //change data and return rest of object
    let newState = {};
    for (const card in cards) {
      newState = {
        ...newState,
        [card]: {
          ...cards[card],
          data: getRandomObj(getPackOfCards(cards[card].type)),
        },
      };
    }
    setCards(() => {
      return {
        ...cards,
        ...newState,
      };
    });
  };

  const getPackOfCards = (type: string) => {
    if (type === "People") {
      return peoplesState.peoples;
    } else if (type === "Ships") {
      return starshipsState.starships;
    } else if (
      type === "All" &&
      starshipsState.starships !== undefined &&
      peoplesState.peoples !== undefined
    ) {
      return [...starshipsState.starships, ...peoplesState.peoples];
    }
  };

  const resetGame = () => {
    setCards(() => {
      return {
        ...initialState,
      };
    });
  };

  return (
    <GameTemplate>
      {starshipsState.loading ? (
        <div>Loading</div>
      ) : (
        <>
          <StyledCardWrapper>
            <GameCard
              reversed={cards.leftCard.data === undefined}
              title={cards.leftCard.data?.name}
              description={
                cards.leftCard.data?.cardType === "people" ? (
                  <ul>{<li> Mass:{cards.leftCard.data?.mass}</li>}</ul>
                ) : (
                  <ul>{<li> Crew: {cards.leftCard.data?.crew}</li>}</ul>
                )
              }
              actions={
                <BaseSelect
                  values={["All", "People", "Ships"]}
                  initialValue="All"
                  handleSelect={(event: string) =>
                    setCardType(event, "leftCard")
                  }
                ></BaseSelect>
              }
            ></GameCard>
          </StyledCardWrapper>
          <div>
            <BaseButton onClick={shuffleCards}>Start Game</BaseButton>
            <BaseButton onClick={resetGame}>Reset</BaseButton>
          </div>
          <StyledCardWrapper>
            <GameCard
              reversed={cards.rightCard.data === undefined}
              title={cards.rightCard.data?.name}
              description={
                cards.rightCard.data?.cardType === "people" ? (
                  <ul>{<li> Mass:{cards.rightCard.data?.mass}</li>}</ul>
                ) : (
                  <ul>{<li> Crew: {cards.rightCard.data?.crew}</li>}</ul>
                )
              }
              actions={
                <BaseSelect
                  values={["All", "People", "Ships"]}
                  initialValue="All"
                  handleSelect={(event: string) =>
                    setCardType(event, "rightCard")
                  }
                ></BaseSelect>
              }
            ></GameCard>
          </StyledCardWrapper>
        </>
      )}
    </GameTemplate>
  );
};

export default RandomPlayer;
