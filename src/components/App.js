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
    }
  };

  render() {
    return (
      <div>
        <h2>i am a app</h2>
        <Week day={this.state.day} />
      </div>
    );
  }
}

export default App;
