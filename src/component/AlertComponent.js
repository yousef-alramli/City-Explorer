import React, { Component } from 'react'
import {Alert} from 'react-bootstrap'
class AlertComponent extends Component {
    render() {
        return (
            <div>
                <Alert variant="danger">
  <Alert.Heading>Error 404</Alert.Heading>
  <p>
    Location not found
  </p>
</Alert>
                
            </div>
        )
    }
}

export default AlertComponent
