import React from "react";

class EditExercise extends React.Component {
  handleChange = event => {
    const updatedExercise = event.currentTarget.value;

    this.props.updateExercise(
      this.props.day,
      this.props.index,
      event.currentTarget.name,
      updatedExercise
    );
  };

  render() {
    const exercise = this.props.details[this.props.index];
    return (
      <div>
        <h2>there is an exercise here</h2>
        <p>{this.props.index}</p>
        {console.log(this.props.details[this.props.index].name)}
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={exercise.name}
        />
      </div>
    );
  }
}

export default EditExercise;
