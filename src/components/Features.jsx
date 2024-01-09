import React from 'react'
import FAQ from './Questions'

const Features = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <div className='flex flex-row justify-center text-white'>
                <div className='flex flex-col items-start justify-center '>
                    <h2 className="text-4xl mb-4 font-bold">Enjoy on your TV.</h2>
                    <p className="text-xl">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                <div className='relative' style={{ width: '600px', height: '350px' }}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="movie" className='absolute w-full h-full' />
                    <video autoPlay muted loop playsInline className='absolute' style={{ top: '21%', left: '13%', width: '73%', height: '55%', objectFit: 'cover' }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"></video>
                </div>
            </div>
            {/* second */}
            <div className='flex flex-row justify-center text-white'>
                <div className='relative' style={{ width: '600px', height: '400px' }}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="mobile" className='absolute w-full h-full' />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className="text-4xl mb-4">Download your shows to watch offline</h2>
                    <p className="text-xl">Save your favourites easily and always have something to watch.</p>
                </div>
            </div>
            {/* third */}
            <div className='flex flex-row justify-center text-white'>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className="text-4xl mb-4">Watch everywhere</h2>
                    <p className="text-xl">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                </div>
                <div className='relative' style={{ width: '600px', height: '400px' }}>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="mac" className='absolute w-full h-full z-20' />
                    <video autoPlay muted loop playsInline className='absolute z-10' style={{ top: '10%', left: '17%', width: '63%', height: '50%', objectFit: 'cover' }}
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"></video>
                </div>
            </div>
            {/* fourth */}
            <div className='flex flex-row justify-center text-white'>
                <div className='relative' style={{ width: '600px', height: '400px' }}>
                    <img src="https://occ-0-4230-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="child" className='absolute w-full h-full' />
                </div>
                <div className='flex flex-col items-start justify-center'>
                    <h2 className="text-4xl mb-4">Create profiles for kids</h2>
                    <p className="text-xl">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                </div>
            </div>
            <FAQ />
        </div>
    )
}

export default Features