import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {

    if (!movies) return
    return (
        <div className='px-6'>
            <h2 className='text-xl text-white py-4 font-semibold'>{title}</h2>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex gap-5'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList