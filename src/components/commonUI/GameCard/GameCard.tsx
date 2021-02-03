import React, { ReactNode } from "react";

import {
  PeopleIcon,
  StarshipIcon,
  Wrapper,
  CardBackground,
  Container,
  CardTitle,
  CardParameter,
  CardParameterContainer,
  CardActions,
} from "./GameCard.styles";
import styled from "styled-components";
import jediIcon from "src/assets/images/jedi.png";
interface GameCardI {
  cardType?: string;
  title?: string;
  description?: ReactNode | string;
  actions?: ReactNode | string;
  reversed?: boolean;
  redCard?: boolean;
  blueCard?: boolean;
  winner?: boolean;
}

const StyledIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  img {
    width: 160px;
  }
  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    img {
      width: 120px;
    }
  }
  @media all and (max-width: ${({ theme }) => theme.bpMobile}) {
    img {
      width: 80px;
    }
  }
`;

const GameCard: React.FC<GameCardI> = ({
  cardType,
  title,
  description,
  actions,
  reversed,
  redCard,
  blueCard,
  winner,
}) => {
  return (
    <Wrapper
      data-testid="game-card"
      redCard={redCard}
      blueCard={blueCard}
      winner={winner}
    >
      {cardType === "starships" && <StarshipIcon />}
      {cardType === "people" && <PeopleIcon />}
      <Container faceUp={!reversed}>
        <CardBackground></CardBackground>
        {reversed ? (
          <StyledIconWrapper>
            <img src={jediIcon} alt="jedi icon"></img>
          </StyledIconWrapper>
        ) : (
          <>
            <CardTitle>{title}</CardTitle>
            <CardParameter>
              <CardParameterContainer redCard={redCard} blueCard={blueCard}>
                {description}
              </CardParameterContainer>
            </CardParameter>
          </>
        )}
        <CardActions>{actions}</CardActions>
      </Container>
    </Wrapper>
  );
};

export default GameCard;
