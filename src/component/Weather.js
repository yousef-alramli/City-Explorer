import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap'
class Weather extends Component {
    render() {
        return (
            <div>
                
                {
                this.props.cityWeather.map(item=>{
                    return<><ListGroup>
                        <h2>Day number: {this.props.cityWeather.indexOf(item)+1}</h2>
                    <ListGroup.Item variant="primary">Date:         {item.date}</ListGroup.Item>
                    <ListGroup.Item variant="success">description:  {item.description}</ListGroup.Item>
                  </ListGroup>
                    </>
                })
                }
            </div>
        )
    }
}

export default Weather
