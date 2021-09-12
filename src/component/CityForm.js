import React, { Component } from 'react'

class CityForm extends Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' placeholder='City Name' onChange={this.props.handleCity}/>
                    <input type="submit" value="Explore"/>
                </form>
            </div>
        )
    }
}

export default CityForm
