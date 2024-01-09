import React, { useRef } from 'react'
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'
import { useDispatch } from 'react-redux'

const GptSearchBar = () => {
    const dispatch = useDispatch()
    const searchText = useRef()

    const searchMovieTMDB = async (movie) => {
        const data = await fetch(
            'https://api.themoviedb.org/3/search/movie?query=' +
            movie +
            '&include_adult=false&language=en-US&page=1',
            API_OPTIONS
        )
        const json = await data.json()

        return json.results
    }

    const handleGptSearchClick = async () => {

        console.log(searchText.current.value);

        const gptQuery =
            "Act as a Movie Recommendation system and suggest some movies for the query:" +
            searchText.current.value +
            ". only give me names of 5 movies, comma separated like the example result given ahead. Example: Gadar, Don, Tiger Zinda Hai, Golmaal 3, Kabir Singh "

        const gptResult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        if (!gptResult.choices) return ("sorry")

        console.log(gptResult.choices?.[0]?.message.content);

        const gptMovie = gptResult.choices?.[0]?.message.content.split(",")

        const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie))

        const tmdbResults = await Promise.all(promiseArray)

        dispatch(addGptMovieResult({ movieNames: gptMovie, movieResults: tmdbResults }))
    }

    return (
        <div className='lg:pt-[12%] pt-[25%] flex justify-center'>
            <form className='w-1/2 grid lg:grid-cols-12 grid-cols-1 rounded-lg' onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} className='p-4 m-2 rounded-lg col-span-9 text-2xl font-semibold' placeholder='What would you watch today??' />
                <button
                    onClick={handleGptSearchClick}
                    className='px-4 py-2 m-2 col-span-3 rounded-lg bg-pink-200 text-2xl font-semibold' >
                    Search
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar