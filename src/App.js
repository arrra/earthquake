import React from 'react';
import EarthquakesList from './EarthquakesList';
import earthquakeApi from './EarthquakeApi';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      earthquakes: [],
      isLoading: true,
      errorMessage: '',
    };
  }

  componentDidMount() {
    earthquakeApi
      .getData()
      .then(earthquakes => this.setState({...earthquakes, isLoading: false}))
      .catch(err => {
        this.setState({
          errorMessage: 'Opps! Trouble loading earthquake data',
          isLoading: false,
        });
      });
  }

  render() {
    if (this.state.isLoading) {
      return <h1> Loading... </h1>;
    } else if (this.state.errorMessage) {
      return <h1> {this.state.errorMessage} </h1>;
    }
    return (
      <EarthquakesList list={this.state.earthquakes} />
    );
  }
}

export default App;

