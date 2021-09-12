import React, { Component } from 'react'
import CityForm from './component/CityForm'
import Locations from './component/Locations';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

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
    console.log(this.state.lat);
    return (
      <div>

        <CityForm
          handleCity={this.handleCity}
          handleSubmit={this.handleSubmit}
        />

        {
          this.state.showLocation &&
          <Locations
          imgUrl={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14&size=400x400&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}
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
