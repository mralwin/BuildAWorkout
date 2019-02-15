import React from "react";
import Day from "./day";
import Week from "./week";

class App extends React.Component {
  state = {
    day: {
      monday: "monday",
      teusday: "teusday",
      wednesday: "wednesday",
      thursday: "thursday",
      friday: "friday",
      saturday: "saturday",
      sunday: "sunday"
    },
    exercises: {
      monday: {},
      teusday: {},
      wednesday: {},
      thursday: {},
      friday: {},
      saturday: {},
      sunday: {}
    }
  };

  addExersise = exercise => {
    const exercises = { ...this.state.exercises };
    exercises[`${exercise.day}`][`${exercise.day}-${exercise.name}`] = exercise;
    this.setState({
      exercises: exercises
    });
  };

  render() {
    return (
      <div>
        <h2>i am a app</h2>
        <Week
          day={this.state.day}
          exercises={this.state.exercises}
          addExercise={this.addExersise}
        />
      </div>
    );
  }
}

export default App;
