import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class Movie extends Component {
    render() {
        return (
            <div>
                {
                <ListGroup>
                    <ListGroup.Item variant="secondary">Date: {this.props.cityMovie.title}</ListGroup.Item>
                    <ListGroup.Item variant="warning">description: {this.props.cityMovie.overview}</ListGroup.Item>
                </ListGroup>
                }
            </div>
        )
    }
}

export default Movie
