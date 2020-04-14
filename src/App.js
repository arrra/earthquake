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
  }
}

export default App;

