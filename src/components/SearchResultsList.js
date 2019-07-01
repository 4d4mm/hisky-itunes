import React from "react";
import { withStyles } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    transformOrigin: "50%",
    transform: "rotate(-1.5deg)",
    height: "37vw",
    "&::-webkit-scrollbar": {
      width: "1px"
    }
  }
});

const SeactReaultList = ({ children, classes }) => (
  <div className={classes.root}>{children}</div>
);

export default withStyles(styles)(SeactReaultList);
