import React from "react";
import Fetch from "react-fetch-component";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Grid, withStyles, Button, IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import LoadingIndicator from "../components/LoadingIndicator";
import Header from "../components/Header";

const styles = theme => ({
  root: {
    width: "100%",
    height: "100%"
  },
  grid: {
    maxWidth: 1440,
    margin: "0 auto"
  },
  artwork: {
    width: `calc(100% - ${3 * theme.spacing.unit}px)`,
    height: "100%",
    objectFit: "contain",
    verticalAlign: "top"
  },
  player: {
    width: "100% !important",
    height: "auto !important",
    minHeight: 60,
    "&>audio": {
      width: 100,
      minHeight: 60
    }
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {}
});

const DetailsScreen = ({ match, history, classes }) => (
  <Fetch
    url={`https://itunes.apple.com/lookup?id=${match.params.trackId}`}
    as="json"
  >
    {({ loading, error, data }) => (
      <div className={classes.root}>
        {loading && <LoadingIndicator title="Loading..." />}
        {error && (
          <>
            <Header title="Error" history={history} />
            {JSON.stringify(error)}
          </>
        )}
        {data &&
          data.results &&
          data.results.map(item => {
            console.log(item.errorMessage);
            return (
              <div key={`track__${item.trackId}`}>
                <Header title={item.trackName} history={history} />
                <Grid
                  key={item.trackId || new Date().getTime()}
                  container
                  spacing={8}
                  className={classes.grid}
                >
                  <Grid item xs={12} sm={4}>
                    <img
                      src={item.artworkUrl100.replace("100x100bb", "512x512")}
                      alt={item.trackTitle}
                      className={classes.artwork}
                    />
                  </Grid>
                  <Grid item xs={12} sm={8}>
                    <ReactPlayer
                      url={item.previewUrl}
                      playing
                      controls
                      poster={item.artworkUrl100}
                      className={classes.player}
                    />
                  </Grid>
                  <Grid item>{item.description}</Grid>
                </Grid>
              </div>
            );
          })}
      </div>
    )}
  </Fetch>
);

export default withStyles(styles)(DetailsScreen);
