import React from "react";
import { Wrapper, CardBackground, Container } from "./BaseCard.styles";

interface BaseCardI {
  title: string;
  list?: any;
  actions?: any;
}

const BaseCard: React.FC<BaseCardI> = ({ title, list, actions }) => {
  return (
    <Wrapper>
      <Container>
        <CardBackground></CardBackground>
      </Container>
    </Wrapper>
  );
};

export default BaseCard;
