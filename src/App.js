import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, errorMessage: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }
  render() {
    return (
      <>
        {this.state.errorMessage ? (
          <div>Error: {this.state.errorMessage}</div>
        ) : this.state.lat ? (
          <div>Latitude: {this.state.lat}</div>
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
}

export default App;
