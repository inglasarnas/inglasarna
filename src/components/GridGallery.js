import React, { useState } from "react";
import {
  makeStyles,
  Modal,
  Container,
  GridList,
  GridListTile,
  Typography,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: "blur(3px)",
  },
  img: {
    height: "auto",
    maxHeight: "90vh",
    maxWidth: "100%",
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(5),
  },
  galleryImage: {
    objectFit: "cover",
  },
  gridList: {
    justifyContent: "center",
  },
}));

const GridGallery = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(0);

  const openLightBox = (index) => {
    setCurrentImg(index);
    setOpen(true);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h2" className={classes.title}>
        {props.title || "Rubrik"}
      </Typography>
      <GridList cellHeight={250} cols={3} className={classes.gridList}>
        {props.images.map((image, index) => (
          <GridListTile key={index} cols={1}>
            <img
              onClick={() => openLightBox(index)}
              className={classes.galleryImage}
              src={image.img}
              alt={image.title}
            />
          </GridListTile>
        ))}
      </GridList>
      <Modal
        disableAutoFocus={true}
        className={classes.modal}
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-gallery"
        aria-describedby="modal-gallery"
      >
        <Carousel
          index={currentImg}
          className={classes.carousel}
          autoPlay={false}
          navButtonsAlwaysVisible
          cycleNavigation={false}
        >
          {props.images.map((image, index) => (
            <img
              className={classes.img}
              src={image.img}
              key={index}
              alt={image.title}
            />
          ))}
        </Carousel>
      </Modal>
    </Container>
  );
};
export default GridGallery;
