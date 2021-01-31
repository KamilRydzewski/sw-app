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

type PointsState = {
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

interface CompareFunc {
  (compareTo: any, compareWith: any, comparingParams: string[]): number;
}
const RandomPlayer = () => {
  const starshipsState = useSelector((state: RootStoreType) => state.starships);
  const peoplesState = useSelector((state: RootStoreType) => state.peoples);
  const [cards, setCards] = useState<CardsState>(initialCardsState);
  const [points, setPoints] = useState<PointsState>(initialPointsState);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setWinner(() => {
      if (points.left.now > points.left.prev) {
        return "leftCard";
      } else if (points.right.now > points.right.prev) {
        return "rightCard";
      } else return "";
    });
    setTimeout(() => {
      setWinner(() => "");
    }, 2000);
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
  }, [cards]);

  const compareCardPoints: CompareFunc = (
    compareTo,
    compareWith,
    comparingParams
  ) => {
    if (compareTo === undefined && compareWith === undefined) return 0;
    let firstValue = 0;
    let secondValue = 0;
    comparingParams.forEach((param) => {
      if (compareTo.hasOwnProperty(param)) {
        firstValue = compareTo[param];
      }
      if (compareWith.hasOwnProperty(param)) {
        secondValue = compareWith[param];
      }
    });
    return firstValue <= secondValue ? 0 : 1;
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

  const isWinner = (compareTo: string, compareWith: string) => {
    let gettedPoint = compareCardPoints(
      cards[compareTo].data,
      cards[compareWith].data,
      ["crew", "mass"]
    );

    if (gettedPoint === 0) {
      return false;
    } else return true;
  };

  const resetGame = () => {
    setCards(() => {
      return {
        ...initialCardsState,
      };
    });

    setPoints(() => {
      return {
        ...initialPointsState,
      };
    });
  };

  return (
    <GameTemplate>
      <GameTopBar leftPoints={points.left.now} rightPoints={points.right.now}>
        <BaseButton onClick={resetGame}>Reset</BaseButton>
      </GameTopBar>
      <StyledCardWrapper>
        <GameCard
          winner={winner === "leftCard"}
          blueCard
          reversed={cards.leftCard.data === undefined}
          title={cards.leftCard.data?.name}
          description={
            cards.leftCard.data?.cardType === "people" ? (
              <ul>
                <li> Mass:{cards.leftCard.data?.mass}</li>
              </ul>
            ) : (
              <ul>
                <li> Crew: {cards.leftCard.data?.crew}</li>
              </ul>
            )
          }
          actions={
            <BaseSelect
              values={["All", "People", "Ships"]}
              initialValue="All"
              handleSelect={(event: string) => setCardType(event, "leftCard")}
            ></BaseSelect>
          }
        ></GameCard>
      </StyledCardWrapper>
      <div>
        <BaseButton onClick={shuffleCards} disabled={winner !== ""}>
          Start Game
        </BaseButton>
      </div>
      <StyledCardWrapper>
        <GameCard
          winner={winner === "rightCard"}
          redCard
          reversed={cards.rightCard.data === undefined}
          title={cards.rightCard.data?.name}
          description={
            cards.rightCard.data?.cardType === "people" ? (
              <ul>
                <li> Mass:{cards.rightCard.data?.mass}</li>
              </ul>
            ) : (
              <ul>
                <li> Crew: {cards.rightCard.data?.crew}</li>
              </ul>
            )
          }
          actions={
            <BaseSelect
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
