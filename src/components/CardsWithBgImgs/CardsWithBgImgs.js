import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import CardWithBgImg from "./CardWithBgImg";
import {cardsWithBgImg} from '../../assets/assets';
const CardsWithBgImgs = () => {
  return (
    <Grid container spacing={3}>
      {info.cardsWithBgImg((card) => {
        return (
          <Grid item xs={10}>
            <CardWithBgImg
              key={card.title}
              title={card.title}
              text={card.text}
              image={card.image}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default CardsWithBgImgs;
