import React from "react";

class EditExercise extends React.Component {
  handleChange = event => {
    alert(event.currentTarget.value);
    const updatedExercise = {
      ...this.props.details,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateExercise(
      this.props.index,
      event.currentTarget.value,
      updatedExercise
    );
  };

  renderUpdate = key => {
    const exercise = this.props.details[key];
    return (
      <div>
        <h2>there is an exersice here</h2>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={exercise.name}
        />
      </div>
      /*
      <div>
        <input type='text' name="name" onChange={this.handleChange} value={this.exercise.name} />
        <input type='text' name="set" onChange={this.handleChange} value={this.exercise.set} />
        <input type='text' name="rep" onChange={this.handleChange} value={this.exercise.rep}/>
        <input type='text' name="rest" onChange={this.handleChange} value={this.exercise.rest} />
        <input type='text' name="progress" onChange={this.handleChange} value={this.exercise.progress} />
        <button onClick={() => this.props.deleteExercise(this.props.index)}>Delete Fish</button>
      </div>
      */
    );
  };

  render() {
    return Object.keys(this.props.details).map(key => this.renderUpdate(key));
  }
}

export default EditExercise;
