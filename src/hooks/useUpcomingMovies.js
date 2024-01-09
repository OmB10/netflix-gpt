import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUpcomingMovies } from '../utils/moviesSlice'

const useUpcomingMovies = () => {
    const dispatch = useDispatch()

    const gatUpcomingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc', API_OPTIONS)
        const json = await data.json()
        // console.log(json.results);
        dispatch(addUpcomingMovies(json.results))
    }

    useEffect(() => {
        gatUpcomingMovies()
    }, [])
}

export default useUpcomingMovies