import React from "react";

class Exercise extends React.Component {
  render() {
    return `${JSON.stringify(this.props.details)}`;
  }
}

export default Exercise;
