import React from "react";
import Modal from "./Modal";
import AddExerciseForm from "./AddExerciseForm";
import EditExercise from "./EditExercise";

class Day extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    const raw = this.props.exercises;
    const allowed = this.props.index;

    const filtered = Object.keys(raw)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = raw[key];
        return obj;
      }, {});

    return (
      <div className="a">
        <h2>I am {this.props.index}</h2>
        {Object.keys(filtered).map(key => (
          <EditExercise
            key={key}
            index={key}
            details={filtered[key]}
            updateExercise={this.props.updateExersise}
            deleteExercise={this.props.deleteExersise}
          />
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
