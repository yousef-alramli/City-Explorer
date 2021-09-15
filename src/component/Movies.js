import React, { Component } from 'react'
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <div>
                <span className='spans2'>
                    <h2>Movies that related to the city</h2>
                    {
                        this.props.cityMovie.map(item => {
                            return <>
                                <h2>Movie number: {this.props.cityMovie.indexOf(item) + 1}</h2>
                                <Movie cityMovie={item} />
                            </>
                        }
                        )
                    }

                </span>
            </div>
        )
    }
}

export default Movies
