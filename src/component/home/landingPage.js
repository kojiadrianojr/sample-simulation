import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import Login from "../login/login";
import Signup from "../signup/signup";
import { textAlign } from "@material-ui/system";

// import Logo from 'https://boomsourcing.com/wp-content/uploads/2019/08/logo.png'

const useStyle = theme => ({
  mainDiv: {
    width: "100%",
    height: "100vh"
  },
  video: {
    position: "fixed",
    width: "100%",
    zIndex: "-1"
  },
  header: {
    height: "100px",
    width: "100%",
    boxShadow: "1px 1px 2px #999",
    display: "flex",
    justifyContent: "center"
    //   borderBottom: '.1px ridge #888'
  },
  headerBody: {
    width: "80%",
    height: "100%",
    display: "inline-flex",
    justifyContent: "space-around",
    alignItems: "center"
    //   backgroundColor: 'red'
  },
  headerLeft: {
    width: "25%",
    height: "inherit",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    //   backgroundColor: 'orange'
  },
  logo: {
    width: "80%"
  },
  headerRight: {
    width: "30%",
    height: "40%",
    display: "inline-flex",
    justifyContent: "space-around",
    // alignItems: "center",
    fontSize: "19px",
    color: "#444",
    fontWeight: "bold"
    // backgroundColor: "red"
  },
  body: {
    width: "100%",
    height: "89.5%",
    display: "inline-flex",
    flexWrap: "wrap",
    // justifyContent: "space-between",
    alignItems: "flex-end"
    //   height: '89.5vh',
    //   backgroundColor: 'red'
  },
  bodyLeft: {
    width: "50%",
    height: "92%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
    // backgroundColor: "red"
  },
  bodyRight: {
    width: "50%",
    height: "92%"
    // backgroundColor: 'orange'
  },
  navItem: {
    cursor: "pointer"
  },
  footer: {
    height: "5%",
    width: "100%",
    backgroundColor: "#f1f1f1",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  footerTxt: {
    fontSize: "13px",
    color: "#444",
    marginRight: "30px"
  }
});

class Landing extends React.Component {
  constructor() {
    super();

    this.state = {
      displayLogin: "flex",
      displaySignup: "none",
      homeNav: "2px solid #444",
      loginNav: "none",
      signNav: "none"
    };
  }

  handleHome() {
    this.setState({
      homeNav: "2px solid #444",
      loginNav: "none",
      signNav: "none"
    });
  }

  handleLogin() {
    this.setState({
      homeNav: "none",
      loginNav: "2px solid #444",
      signNav: "none",
      displayLogin: "flex",
      displaySignup: "none"
    });
  }

  handleSignup() {
    this.setState({
      homeNav: "none",
      loginNav: "none",
      signNav: "2px solid #444",
      displayLogin: "none",
      displaySignup: "flex"
    });
  }

  render() {
    // console.log(this.props.history);
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classes.mainDiv}>
          <video autoPlay muted loop className={classes.video}>
            <source
              src="https://boomsourcing.com/wp-content/uploads/2019/10/Volcan-5-Boom.mp4"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
          <div className={classes.header}>
            <div className={classes.headerBody}>
              <div className={classes.headerLeft}>
                <img
                  className={classes.logo}
                  src="https://boomsourcing.com/wp-content/uploads/2019/08/logo.png"
                />
              </div>
              <div className={classes.headerRight}>
                <span
                  className={classes.navItem}
                  style={{
                    borderBottom: this.state.homeNav,
                    height: "30px",
                    transition: ".5s"
                    // paddingBottom: "5px"
                  }}
                  onClick={() => this.handleHome()}
                >
                  Home
                </span>
                <span
                  className={classes.navItem}
                  onClick={() => this.handleLogin()}
                  style={{
                    borderBottom: this.state.loginNav,
                    height: "30px",
                    transition: ".5s"
                    // paddingBottom: "5px"
                  }}
                >
                  Login
                </span>
                <span
                  className={classes.navItem}
                  style={{
                    borderBottom: this.state.signNav,
                    height: "30px",
                    transition: ".5s"
                    // paddingBottom: "5px"
                  }}
                  onClick={() => this.handleSignup()}
                >
                  Sign-up
                </span>
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.bodyLeft}>
              <Login
                display={this.state.displayLogin}
                history={this.props.history}
              />
              <Signup display={this.state.displaySignup} />
            </div>
            <div className={classes.bodyRight}></div>
            <div className={classes.footer}>
              <span className={classes.footerTxt}>
                BoomCamp Sign-in Simulation 2019 © All Rights Reserved
              </span>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(useStyle)(Landing);
