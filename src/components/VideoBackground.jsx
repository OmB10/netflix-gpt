import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {

    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)

    useMovieTrailer(movieId)
    return (
        <div>
            <iframe src={"https://www.youtube.com/embed/yBnTqn0lBDA?si=3Ua_L52LYIDE17QZ" + "&autoplay=1&mute=1"}
                className='w-screen aspect-video'
                title="YouTube video player"
                allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
            </iframe>
        </div >
    )
}

export default VideoBackground