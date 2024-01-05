import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-24 text-white absolute '>
            <h1 className='font-bold text-4xl mb-2'>{title}</h1>
            <p className='text-sm w-4/12'>{overview}</p>
            <div className='flex gap-5 mt-3'>
                <button className=' px-4 gap-1 bg-slate-200 hover:bg-slate-300 flex flex-row text-black py-2 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-6 h-6">
                        <path d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" />
                    </svg>
                    Play
                </button>
                <button className='px-4 gap-1 bg-gray-500 hover:bg-gray-400 flex flex-row text-white py-2 rounded-md'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                    </svg>
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle