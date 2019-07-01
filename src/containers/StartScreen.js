import React from "react";
import { withStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";

const styles = theme => ({
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  title: {
    fontFamily: "MorganiteBlack",
    fontSize: "7rem",
    marginTop: 0
  },
  searchField: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400
  },
  input: {
    marginLeft: theme.spacing.unit,
    flex: 1
  },
  iconButton: {
    padding: 10
  }
});

class StartScreen extends React.Component {
  state = {
    query: ""
  };
  handleInputChange = ev => this.setState({ query: ev.target.value });

  getQuery = () => {
    const { query } = this.state;
    return encodeURIComponent(
      query.replace(/[^a-zA-Z0-9\s]/g, "").replace(/\s+/, "-")
    );
  };

  handleSearch = () => {
    const { history } = this.props;
    const { query } = this.state;
    history.push(`/search?query=${this.getQuery(query)}`);
  };

  render() {
    const { query } = this.state;
    const { classes } = this.props;
    return (
      <section className={classes.root}>
        <h1 className={classes.title}>HiSky iTunes Search</h1>
        <Paper
          className={classes.searchField}
          elevation={0}
          component="form"
          onSubmit={this.handleSearch}
        >
          <InputBase
            className={classes.input}
            placeholder="Search on iTunes"
            inputProps={{ "aria-label": "Search on iTunes" }}
            value={query}
            onChange={this.handleInputChange}
            onKeyUp={this.handle}
          />
          <IconButton
            className={classes.iconButton}
            onClick={this.handleSearch}
          >
            <Search />
          </IconButton>
        </Paper>
      </section>
    );
  }
}

export default withStyles(styles)(StartScreen);
