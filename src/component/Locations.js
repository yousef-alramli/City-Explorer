import React, { Component } from 'react'
import { Card, Image } from 'react-bootstrap'
class Locations extends Component {
    render() {
        return (
            <div>
                <Card >
                    <Card.Img variant="top" src={this.props.imgUrl}/>
                    <Card.Body>
                        <Card.Title>{this.props.city_name}</Card.Title>
                        <Card.Text>
                        {this.props.lat}/{this.props.lon}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Locations
