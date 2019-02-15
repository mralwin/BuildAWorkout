import React from "react";
import PropTypes from "prop-types";

class AddExerciseForm extends React.Component {
  nameRef = React.createRef();
  setRef = React.createRef();
  repRef = React.createRef();
  restRef = React.createRef();
  progressRef = React.createRef();

  static propTypes = {
    addExercise: PropTypes.func
  };

  createExercise = event => {
    event.preventDefault();
    const exercise = {
      day: this.props.day,
      name: this.nameRef.current.value,
      set: this.setRef.current.value,
      rep: this.repRef.current.value,
      rest: this.restRef.current.value,
      progress: this.progressRef.current.value
    };
    this.props.addExercise(exercise);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.createExercise}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input name="set" ref={this.setRef} type="text" placeholder="Sets" />
        <input name="rep" ref={this.repRef} type="text" placeholder="Reps" />
        <input name="rest" ref={this.restRef} type="text" placeholder="Rest" />
        <input
          name="progress"
          ref={this.progressRef}
          type="text"
          placeholder="Weight increment"
        />
        <button type="submit">Add Exercise</button>
      </form>
    );
  }
}

export default AddExerciseForm;
