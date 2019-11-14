import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

const useStyles = theme => ({
  loginCard: {
    width: "400px",
    height: "550px",
    border: "1px ridge",
    boxShadow: "1px 2px 3px #999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardBody: {
    width: "80%",
    height: "80%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column"
    // backgroundColor: 'red'
  },
  loginTitle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  }
});

class Signup extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { classes } = this.props;
    return (
      <div
        style={{ display: this.props.display }}
        className={classes.loginCard}
      >
        <div className={classes.cardBody}>
          <span className={classes.loginTitle}>
            <b class="boom-camp">Boom Camp</b>
            <span>Sign-Up</span>
          </span>
          <TextField
            placeholder="Fullname"
            label="Fullname"
            variant="outlined"
            fullWidth
          />
          <TextField
            placeholder="Username or Email"
            label="Username or Email"
            variant="outlined"
            fullWidth
          />
          <TextField
            placeholder="Password"
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
          />
          <Button variant="contained" color="secondary" fullWidth>
            Sign-Up
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(useStyles)(Signup);
