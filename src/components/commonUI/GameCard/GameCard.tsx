import React from "react";
import Button from "@material-ui/core/Button";
import BaseCard from "src/components/baseUI/BaseCard/BaseCard";
import Typography from "@material-ui/core/Typography";

type Props = {
  title: string;
  params: any[];
};

const GameCard: React.FC<Props> = ({ title, params }) => {
  return (
    <BaseCard
      title={title}
      list={params.map((el) => (
        <Typography key={el} color="textSecondary" gutterBottom>
          {el}
        </Typography>
      ))}
      actions={<Button>Check</Button>}
    ></BaseCard>
  );
};

export default GameCard;
