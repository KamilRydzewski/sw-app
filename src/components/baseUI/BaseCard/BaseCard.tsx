import React from "react";
import { Wrapper } from "./BaseCard.styles";
import { useDispatch } from "react-redux";
import { GetStarships } from "../../../actions/starship/StarshipActions";

const BaseCard: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  const handle = () => dispatch(GetStarships());
  return (
    <Wrapper>
      <button onClick={handle}>sadddass</button>
    </Wrapper>
  );
};

export default BaseCard;
