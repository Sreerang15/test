import React, { Component } from "react";

class Second extends Component {
  state = {
    key: "second",
  };
  render() {
    return <p>{this.state.key}</p>;
  }
}

export default Second;
