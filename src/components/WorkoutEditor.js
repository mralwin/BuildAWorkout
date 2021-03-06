import React from "react";
import Day from "./day";

class WorkoutEditor extends React.Component {
  render() {
    const props = this.props;
    return (
      <div>
        <h2> i am a workout editor </h2>
        {Object.keys(this.props.day).map(key => (
          <Day
            key={key}
            index={key}
            exercises={props.exercises}
            addExercise={props.addExercise}
            updateExercise={props.updateExercise}
            deleteExercise={props.deleteExercise}
          />
        ))}
      </div>
    );
  }
}

export default WorkoutEditor;
