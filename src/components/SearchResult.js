import React from "react";
import { Link } from "react-router-dom";
import { IconButton, withStyles } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

const styles = theme => ({
  root: {
    position: "relative",
    height: "30vw",
    display: "inline-block",
    textDecoration: "none",
    margin: "0 20px",
    verticalAlign: "top"
  },
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
    transform: "scale(0.95)",
    transformOrigin: "50% 50%",
    transition: "all 0.2s linear",
    "&:hover": {
      transform: "scale(1)",
      transformOrigin: "50% 50%",
      transition: "all 0.15s ease-out"
    }
  },
  favorite: {
    position: "absolute",
    top: "0.5rem",
    left: "0.5rem",
    color: "black"
  },
  title: {
    textRendering: "geometricPrecision",
    fontSize: `2rem`,
    letterSpacing: `0.2rem`,
    color: "black",
    textDecoration: "none",
    margin: 0,
    textAlign: "right"
  }
});

const SeactReault = ({
  trackId,
  isVideo,
  artworkUrl100,
  artistName,
  collectionName,
  trackName,
  isFavorite,
  toggleFavorite,
  classes
}) => (
  <Link
    to={`/details/${trackId}`}
    className={classes.root}
    style={{
      width: isVideo ? "20vw" : "30vw"
    }}
  >
    <img
      src={artworkUrl100.replace("100x100bb", "512x512")}
      alt={`${artistName} - ${collectionName}`}
      className={classes.image}
    />
    <IconButton onClick={toggleFavorite} className={classes.favorite}>
      {isFavorite ? <Favorite /> : <FavoriteBorder />}
    </IconButton>
    <h2 className={classes.title}>{trackName}</h2>
  </Link>
);

export default withStyles(styles)(SeactReault);
