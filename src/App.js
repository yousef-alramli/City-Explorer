import React, { Component } from 'react'
import CityForm from './component/CityForm'
import Locations from './component/Locations';
import axios from 'axios';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_name: '',
      lat: "",
      lon: '',
      showLocation: false

    }
  }
  handleCity = (e) => {
    e.preventDefault()
    let city_name = e.target.value;
    this.setState({
      city_name: city_name,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    console.log(`${process.env.REACT_APP_LOCATIONIQ_API_KEY}`);
    let config = {
      method: "get",
      baseURL: `https://api.locationiq.com/v1/autocomplete.php?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.city_name}`
    }
    axios(config).then(receive => {
      this.setState({
        lat: receive.data[0].lat,
        lon: receive.data[0].lon,
        showLocation: true
      })
    })
  }
  render() {
    return (
      <div>

        <CityForm
          handleCity={this.handleCity}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.showLocation &&
          <Locations
            city_name={this.state.city_name}
            lon={this.state.lon}
            lat={this.state.lat}
          />
        }
      </div>
    )
  }
}

export default App
