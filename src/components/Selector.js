import React from "react";
import WorkoutEditor from "./WorkoutEditor";
import SelectorDefault from "./SelectorDefault";
import CurrentDay from "./CurrentDay";

class Selector extends React.Component {
  constructor(props) {
    super(props);
    this.showEditor = this.showEditor.bind(this);
    this.showCurrent = this.showCurrent.bind(this);
    this.state = { show: SelectorDefault };
  }

  showEditor = () => {
    this.setState({ show: WorkoutEditor });
  };

  showCurrent = () => {
    this.setState({ show: CurrentDay });
  };

  render() {
    if (this.state.show === SelectorDefault) {
      return (
        <div>
          <button onClick={this.showCurrent}>current workout</button>
          <button onClick={this.showEditor}>edit workout</button>
          <SelectorDefault />
        </div>
      );
    }

    if (this.state.show === CurrentDay) {
      return (
        <div>
          <button onClick={this.showEditor}>edit workout</button>
          <CurrentDay />
        </div>
      );
    }

    if (this.state.show === WorkoutEditor) {
      return (
        <div>
          <button onClick={this.showCurrent}>current workout</button>
          <WorkoutEditor
            day={this.props.day}
            exercises={this.props.exercises}
            addExercise={this.props.addExercise}
            updateExercise={this.props.updateExercise}
            deleteExercise={this.props.deleteExercise}
          />
        </div>
      );
    }
  }
}

export default Selector;
