import React from "react";
import Day from "./day";

class Week extends React.Component {
  render() {
    return (
      <div>
        <h2> i am a week </h2>
        {Object.keys(this.props.day).map(key => (
          <Day key={key} index={key} addExercise={this.props.addExercise} />
        ))}
      </div>
    );
  }
}

export default Week;
