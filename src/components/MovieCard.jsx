import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className='w-[200px]'>
            <img src={IMG_CDN_URL + posterPath} alt="movie-name" />
        </div>
    )
}

export default MovieCard