import React, { Component } from 'react'
import WeatherDay from './WeatherDay'
class Weather extends Component {
    render() {
        return (
            <div>
                <span className='spans1'>
                    <h2>The city weather</h2>{
                    this.props.cityWeather.map(item => {
                        return <><h2>Day number: {this.props.cityWeather.indexOf(item) + 1}</h2>
                    <WeatherDay cityWeather={item}/>
                    </>
                    })
                    }
                </span>
               
            </div>
        )
    }
}

export default Weather
