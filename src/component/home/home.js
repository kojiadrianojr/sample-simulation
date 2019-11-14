import React from "react";
import { withStyles } from "@material-ui/core/styles";

const useStyle = theme => ({});

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log()
    // console.log(this.props);
    localStorage.getItem("user")
      ? this.props.history.push("/")
      : this.props.history.push("/landing");
  }

  handleLogout() {
    localStorage.clear();
    this.props.history.push("/landing");
  }

  render() {
    return (
      <div>
        <h1>Start your implementation here</h1>
        <button onClick={() => this.handleLogout()}>Logout</button>
      </div>
    );
  }
}

export default withStyles(useStyle)(Home);
