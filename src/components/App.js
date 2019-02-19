import React from "react";
import Selector from "./Selector";

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
    exercises[`${exercise.day}`][`exercise${Date.now()}`] = exercise;
    this.setState({
      exercises: exercises
    });
  };

  updateExercise = (key, index, name, updatedExercise) => {
    const exercises = { ...this.state.exercises };
    exercises[key][index][name] = updatedExercise;
    this.setState({ exercises: exercises });
  };

  deleteExercise = (key, index) => {
    const exercises = { ...this.state.exercises };
    delete exercises[key][index];
    this.setState({ exercises: exercises });
    */
  };

  render() {
    return (
      <div>
        <h2>i am a app</h2>
        <Selector
          day={this.state.day}
          exercises={this.state.exercises}
          addExercise={this.addExersise}
          updateExercise={this.updateExercise}
          deleteExercise={this.deleteExercise}
        />
      </div>
    );
  }
}

export default App;
