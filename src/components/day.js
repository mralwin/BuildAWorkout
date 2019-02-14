import React from "react";
import Modal from "./Modal";
import AddExerciseForm from "./AddExerciseForm";

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
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <AddExerciseForm />
        </Modal>
        <button type="button" onClick={this.showModal}>
          open
        </button>
      </div>
    );
  }
}

export default Day;
