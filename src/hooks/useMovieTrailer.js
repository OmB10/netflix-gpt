import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'
import { useEffect } from 'react'

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch()
    //const trailerVideo = useSelector((store) => store.movies.trailerVideo)
    const getMovieVideo = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json()
        // console.log(json);

        const trailer = json.results.filter((video) => video.type === "Trailer")
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        // if (!trailerVideo)
        getMovieVideo()
    }, [])

}

export default useMovieTrailer