import React, { Component } from 'react'
import CityForm from './component/CityForm'
import Locations from './component/Locations';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import AlertComponent from './component/AlertComponent';
import Weather from './component/Weather';
import Movies from './component/Movies';
import AlertWeather from './component/AlertWeather';
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city_name: '',
      lat: "",
      lon: '',
      showLocation: false,
      showAlert: false,
      cityWeather: [],
      weatherAlert: false,
      cityMovie: []
    }
  }
  handleCity = (e) => {
    e.preventDefault()
    let city_name = e.target.value;
    this.setState({
      city_name: city_name,
    })
  }

  handleMapAlert = () => {
    this.setState({
      showAlert: true,
      showLocation: false
    })
  }
  handleWeatherAlert = () => {
    this.setState({
      weatherAlert: true,
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
    }).catch(this.handleMapAlert)
      .then(() => {
        let city_name = this.state.city_name.toLocaleLowerCase();
        axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/weatherData?lon=${this.state.lon}&lat=${this.state.lat}&searchQuery=${city_name}`).then(res => {
          this.setState({
            cityWeather: res.data
          })
        }).catch(this.handleWeatherAlert)
        axios.get(`http://${process.env.REACT_APP_BACKEND_URL}/movies?query=${city_name}`).then((res) => {
          this.setState({
            cityMovie: res.data
          })
        })
      })

  }

  render() {
    console.log(this.state.cityMovie);
    return (
      <div>

        <CityForm
          handleCity={this.handleCity}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.showAlert &&
          <AlertComponent
          />
        }

        {
          this.state.showLocation &&
          <>
            <Locations
              imgUrl={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=14&size=400x400&format=png&maptype=<MapType>&markers=icon:<icon>|<latitude>,<longitude>&markers=icon:<icon>|<latitude>,<longitude>`}
              city_name={this.state.city_name}
              lon={this.state.lon}
              lat={this.state.lat}
            />
            <Weather cityWeather={this.state.cityWeather} />
            <Movies cityMovie={this.state.cityMovie} />
          </>
        }
        {
          this.state.weatherAlert &&
          <AlertWeather
          />
        }


      </div>
    )
  }
}

export default App
