import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import axios from "axios";

import auth from '../../controller/auth'

const useStyle = theme => ({
  loginCard: {
    width: "400px",
    height: "500px",
    border: "1px ridge",
    boxShadow: "1px 2px 3px #999",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  cardBody: {
    width: "80%",
    height: "75%",
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

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disableState: true,
      unameVal: "",
      pwdVal: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // console.log(this.props);
  }

  handleUname(e) {
    this.setState({ unameVal: e.value });
    this.state.pwdVal && e.value !== ""
      ? this.setState({ disableState: false })
      : this.setState({ disableState: true });
  }

  handlePwd(e) {
    this.setState({ pwdVal: e.value });
    e.value && this.state.unameVal !== ""
      ? this.setState({ disableState: false })
      : this.setState({ disableState: true });
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.props.history);

    // var user;
    // axios.get(`http://172.60.60.53:3000/user`).then(res => {
    //   user = res.data.filter(item => {
    //     return (
    //       item.username == this.state.unameVal &&
    //       item.password == this.state.pwdVal
    //     );
    //   });

    //   // user[0]
    //   //   ? this.props.history.push("/")
    //   //   : this.props.history.push("/landing");
    //   if (user[0]) {
    //     localStorage.setItem("user", JSON.stringify(user[0]));
    //     this.props.history.push("/");
    //     alert("Welcome " + user[0].username);
    //   } else {
    //     alert("Invalid account");
    //     this.props.history.push("/landing");
    //   }
    // });
    var testObj = {
      username: this.state.unameVal,
      password: this.state.pwdVal
    }

    testObj.username !== '' && testObj.password !== ''? (
      auth.login(testObj)
      .then(response => {
        console.log(response)
      })
      .then(()=> this.props.history.push("/"))
      .catch(err => console.log('login.js',err))
    ):(
      console.log('please enter something!!')
    )
    
  }

  render() {
    const { classes } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <div
          style={{ display: this.props.display }}
          className={classes.loginCard}
        >
          <div className={classes.cardBody}>
            <span className={classes.loginTitle}>
              <b className="boom-camp">Boom Camp</b>
              <span>Sign-in Simulation</span>
            </span>

            <TextField
              placeholder="Username or Email"
              label="Username or Email"
              variant="outlined"
              name="uname"
              value={this.state.unameVal}
              onChange={e => this.handleUname(e.target)}
              fullWidth
              autoFocus
            />
            <TextField
              placeholder="Password"
              label="Password"
              type="password"
              variant="outlined"
              name="pwd"
              value={this.state.pwdVal}
              onChange={e => this.handlePwd(e.target)}
              fullWidth
            />
            <Button
              type="submit"
              disabled={this.state.disableState}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Sign-In
            </Button>
          </div>
        </div>
      </form>
    );
  }
}

export default withStyles(useStyle)(Login);
