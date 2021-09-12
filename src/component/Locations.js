import React, { Component } from 'react'

class Locations extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.city_name}</h1>
        <h2>{this.props.lat}/{this.props.lon}</h2>
            </div>
        )
    }
}

export default Locations
