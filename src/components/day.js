import React from "react";
import Modal from "./Modal";
import AddExerciseForm from "./AddExerciseForm";
import Exercise from "./exercise";

class Day extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="a">
        <h2>I am {this.props.index}</h2>
        {Object.keys(this.props.exercises).map(key => (
          <Exercise key={key} index={key} details={this.props.exercises[key]} />
        ))}
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <AddExerciseForm
            addExercise={this.props.addExercise}
            day={this.props.index}
          />
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </div>
    );
  }
}

export default Day;
