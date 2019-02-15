import React from "react";

class Exercise extends React.Component {
  renderExercise = key => {
    const exercise = this.props.details[key];
    return <h2>{exercise.name}</h2>;
  };

  render() {
    return Object.keys(this.props.details).map(key => this.renderExercise(key));
  }
}

export default Exercise;
