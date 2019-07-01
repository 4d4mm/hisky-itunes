import React from "react";

import { Link } from "react-router-dom";
import { withStyles, Button, IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";

const styles = theme => ({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {},
  homeLink: {
    color: "#000",
    textDecoration: "none",
    display: "flex"
  }
});

const Header = ({ title, history, classes }) => (
  <header className={classes.header}>
    <span>
      <IconButton
        component={Link}
        to="/"
        className={classes.homeLink}
        title="Back to search"
      >
        <Home />
      </IconButton>
      {history.length > 1 && (
        <Button onClick={ev => history.goBack()}>Back to search results</Button>
      )}
    </span>
    <h1 className={classes.title}>{title}</h1>
  </header>
);

export default withStyles(styles)(Header);
