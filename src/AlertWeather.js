import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
export class AlertWeather extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
                    <Alert.Heading>Error 500</Alert.Heading>
                    <p>
                        We support weather for Amman, Seattle and Paris
                    </p>
                </Alert>
            </div>
        )
    }
}

export default AlertWeather
