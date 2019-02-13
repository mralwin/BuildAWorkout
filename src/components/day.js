import React from "react";

class Day extends React.Component {
  render() {
    return (
      <div className="a">
        <h2>I am {this.props.index}</h2>
      </div>
    );
  }
}

export default Day;
