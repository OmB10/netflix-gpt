import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_IMAGE } from '../utils/constants'

const GptSearch = () => {
    return (
        <div>
            <div className='absolute h-full -z-10'>
                <img src={BG_IMAGE} className='w-screen' style={{ filter: 'brightness(30%)' }} alt="background" />
            </div>
            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearch