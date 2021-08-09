import React from 'react';
import FadedImgBox from './FadedImgBox';
import {Grid, makeStyles} from '@material-ui/core';
import {fadedImgBoxes} from '../../assets/assets';

  const FadedImgBoxes = () => {
    return(
        <Grid container spacing={3}>
            {fadedImgBoxes.map((box) => {
                return(
                    <Grid item xs={10}>
                        <FadedImgBox backgroundImage={box.image} title={box.title} text={box.text} />
                        </Grid>
                )
            })}
        </Grid>
    )
  }

  export default FadedImgBoxes;