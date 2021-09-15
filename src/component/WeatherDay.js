import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class WeatherDay extends Component {
    render() {
        return (
            <div>
                {
                    <ListGroup>
                        <ListGroup.Item variant="primary">Date: {this.props.cityWeather.date}</ListGroup.Item>
                        <ListGroup.Item variant="success">description: {this.props.cityWeather.description}</ListGroup.Item>
                    </ListGroup>

                }
            </div>
        )
    }
}

export default WeatherDay
