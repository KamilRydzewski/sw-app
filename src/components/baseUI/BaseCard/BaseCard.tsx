import React from "react";
import {
  Wrapper,
  CardBackground,
  Container,
  CardTitle,
  CardParameter,
} from "./BaseCard.styles";

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
        <CardTitle></CardTitle>
        <CardParameter></CardParameter>
      </Container>
    </Wrapper>
  );
};

export default BaseCard;
