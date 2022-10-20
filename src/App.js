import React from "react";
import SeasonDisplay from './SeasonDisplay'
import Spinner from "./Spinner";
import './style/App.css'

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    return (
      <>
        {this.state.errorMessage ? (
          <div>Error: {this.state.errorMessage}</div>
        ) : this.state.lat ? (
          <SeasonDisplay lat={this.state.lat}/>
        ) : (
          <Spinner message={'Please give location permission'}/>
        )}
      </>
    );
  }
}

export default App;
