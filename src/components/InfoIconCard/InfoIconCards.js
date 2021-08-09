import React from "react";
import { Grid } from "@material-ui/core";
import InfoIconCard from "./InfoIconCard";
import {infoIconCards} from '../../assets/assets';

const InfoIconCards = () => {
  return (
    <Grid container spacing={3}>
      {infoIconCards.map((card) => {
        return <InfoIconCard key={card.rubrik} rubrik={card.rubrik} text={card.text} />;
      })}
    </Grid>
  );
};
export default InfoIconCards;
