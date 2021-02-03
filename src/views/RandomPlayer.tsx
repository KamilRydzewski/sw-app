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
import GameTopBar from "src/components/commonUI/GameTopBar/GameTopBar";
import { getKeyPressed } from "src/utils/keyboardUtils";

const StyledCardWrapper = styled.div`
  margin: 20px;
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
  }
`;

export interface IGameCard extends PeopleType, StarshipType {
  [key: string]: number | undefined | string;
}
export interface CardState {
  type: string;
  data?: IGameCard;
}
export type InitialCardsStateTypes = {
  leftCard: CardState;
  rightCard: CardState;
  [key: string]: CardState;
};

export type PointsState = {
  left: {
    prev: number;
    now: number;
  };
  right: {
    prev: number;
    now: number;
  };
};

const initialCardsState = {
  leftCard: {
    data: undefined,
    type: "All",
  },
  rightCard: {
    data: undefined,
    type: "All",
  },
};

const initialPointsState = {
  left: {
    prev: 0,
    now: 0,
  },
  right: {
    prev: 0,
    now: 0,
  },
};

const RandomPlayer: React.FC = () => {
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peopleState = useSelector((state: RootStoreType) => state.people);
  const [cards, setCards] = useState<InitialCardsStateTypes>(initialCardsState);
  const [points, setPoints] = useState<PointsState>(initialPointsState);
  const [winner, setWinner] = useState("");
  const spacePress = getKeyPressed(" ");
  useEffect(() => {
    if (spacePress && winner === "") {
      shuffleCards();
    }
  }, [spacePress]);
  useEffect(() => {
    setWinner(() => {
      if (points.left.now > points.left.prev) {
        return "leftCard";
      } else if (points.right.now > points.right.prev) {
        return "rightCard";
      } else return "draw";
    });
    setTimeout(() => {
      console.log('hello')
      setWinner("");
    }, 3000);
  }, [points]);

  useEffect(() => {
    setPoints((prevState) => {
      return {
        left: {
          prev: prevState.left.now,
          now:
            prevState.left.now +
            compareCardPoints(cards.leftCard.data, cards.rightCard.data, [
              "crew",
              "mass",
            ]),
        },
        right: {
          prev: prevState.right.now,
          now:
            prevState.right.now +
            compareCardPoints(cards.rightCard.data, cards.leftCard.data, [
              "crew",
              "mass",
            ]),
        },
      };
    });
  }, [cards.leftCard.data || cards.rightCard.data]);

  const compareCardPoints = (
    compareTo: IGameCard | undefined,
    compareWith: IGameCard | undefined,
    comparingParams: string[]
  ) => {
    if (compareTo === undefined && compareWith === undefined) return 0;
    let firstValue;
    let secondValue;
    comparingParams.forEach((param) => {
      if (compareTo?.hasOwnProperty(param)) {
        firstValue = compareTo[param];
      }
      if (compareWith?.hasOwnProperty(param)) {
        secondValue = compareWith[param];
      }
    });
    if (firstValue !== undefined && secondValue !== undefined) {
      return firstValue <= secondValue ? 0 : 1;
    } else return 0;
  };

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

    setCards({
      ...cards,
      ...newState,
    });
  };

  const getPackOfCards = (type: string) => {
    if (type === "People") {
      return peopleState.people;
    } else if (type === "Ships") {
      return starshipsState.starships;
    } else if (
      type === "All" &&
      starshipsState.starships !== undefined &&
      peopleState.people !== undefined
    ) {
      return [...starshipsState.starships, ...peopleState.people];
    }
  };

  const resetGame = () => {
    setCards({ ...initialCardsState });
    setPoints({ ...initialPointsState });
  };

  return (
    <GameTemplate>
      <GameTopBar leftPoints={points.left.now} rightPoints={points.right.now}>
        <BaseButton onClick={resetGame}>Reset</BaseButton>
      </GameTopBar>
      <StyledCardWrapper>
        <GameCard
          winner={winner === "leftCard" || winner === "draw"}
          blueCard
          reversed={cards.leftCard.data === undefined}
          title={cards.leftCard.data?.name}
          description={
            cards.leftCard.data?.cardType === "people" ? (
              <p>Mass:{cards.leftCard.data?.mass}</p>
            ) : (
              <p> Crew: {cards.leftCard.data?.crew}</p>
            )
          }
          actions={
            <BaseSelect
              label="Card types"
              values={["All", "People", "Ships"]}
              initialValue="All"
              handleSelect={(event: string) => setCardType(event, "leftCard")}
            ></BaseSelect>
          }
        ></GameCard>
      </StyledCardWrapper>
      <div>
        <BaseButton onClick={shuffleCards} disabled={winner !== ""}>
          Play
        </BaseButton>
      </div>
      <StyledCardWrapper>
        <GameCard
          winner={winner === "rightCard" || winner === "draw"}
          redCard
          reversed={cards.rightCard.data === undefined}
          title={cards.rightCard.data?.name}
          description={
            cards.rightCard.data?.cardType === "people" ? (
              <p>Mass:{cards.rightCard.data?.mass}</p>
            ) : (
              <p>Crew: {cards.rightCard.data?.crew}</p>
            )
          }
          actions={
            <BaseSelect
              label="Card types"
              values={["All", "People", "Ships"]}
              initialValue="All"
              handleSelect={(event: string) => setCardType(event, "rightCard")}
            ></BaseSelect>
          }
        ></GameCard>
      </StyledCardWrapper>
    </GameTemplate>
  );
};

export default RandomPlayer;
