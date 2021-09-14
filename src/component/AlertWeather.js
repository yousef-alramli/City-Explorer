import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
export class AlertWeather extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading>Error 500</Alert.Heading>
                    <p>
                        Location not found
                    </p>
                </Alert>
            </div>
        )
    }
}

export default AlertWeather
