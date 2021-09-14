import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
class WeatherAndMovies extends Component {
    render() {
        return (
            <div>
                <span className='spans1'>
                    <h2>The city weather</h2>
                    {
                        this.props.cityWeather.map(item => {
                            return <><ListGroup>
                                <h2>Day number: {this.props.cityWeather.indexOf(item) + 1}</h2>
                                <ListGroup.Item variant="primary">Date: {item.date}</ListGroup.Item>
                                <ListGroup.Item variant="success">description: {item.description}</ListGroup.Item>
                            </ListGroup>
                            </>
                        })
                    }
                </span>
                <span className='spans2'>
                <h2>Movies that related to the city</h2>
                    {
                        this.props.cityMovie.map(item => {
                            return <><ListGroup>
                                <h2>Movie number: {this.props.cityMovie.indexOf(item) + 1}</h2>
                                <ListGroup.Item variant="secondary">Date: {item.title}</ListGroup.Item>
                                <ListGroup.Item variant="warning">description: {item.overview}</ListGroup.Item>
                            </ListGroup>
                            </>
                        })
                    }
                </span>
            </div>
        )
    }
}

export default WeatherAndMovies
