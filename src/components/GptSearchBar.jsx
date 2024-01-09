import React from 'react'

const GptSearchBar = () => {
    return (
        <div className='pt-[12%] flex justify-center'>
            <form className='w-1/2 grid grid-cols-12 rounded-lg'>
                <input type="text" className='p-4 m-2 rounded-lg col-span-9 text-2xl font-semibold' placeholder='What would you watch today??' />
                <button className='px-4 py-2 m-2 col-span-3 rounded-lg bg-pink-200 text-2xl font-semibold'>Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar