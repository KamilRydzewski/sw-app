import React from "react";
import {
  Wrapper,
  CardBackground,
  Container,
  CardTitle,
  CardParameter,
  CardActions,
} from "./GameCard.styles";
import styled from "styled-components";
// import { StarshipType } from "src/actions/starship/StarshipActionTypes";
import jediIcon from "src/assets/images/jedi.png";
interface GameCardI {
  title?: string;
  description?: any;
  actions?: any;
  reversed?: boolean;
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
  title,
  description,
  actions,
  reversed,
}) => {
  return (
    <Wrapper>
      <Container>
        {reversed ? (
          <>
            <CardBackground></CardBackground>
            <StyledIconWrapper>
              <img src={jediIcon} alt="jedi icon"></img>
            </StyledIconWrapper>
          </>
        ) : (
          <>
            <CardBackground></CardBackground>
            <CardTitle>{title}</CardTitle>
            <CardParameter>{description}</CardParameter>
            <CardActions>{actions}</CardActions>
          </>
        )}
      </Container>
    </Wrapper>
  );
};

export default GameCard;
