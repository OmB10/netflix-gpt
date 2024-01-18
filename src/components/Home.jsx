import React from 'react';
import { BG_IMAGE } from '../utils/constants';
import Header from './Header';
import Features from './Features';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Header />
            <div className="relative w-full">
                <img src={BG_IMAGE} className='absolute w-screen ' alt="background" style={{ filter: 'brightness(50%)' }} />
                <div className="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
                <div className="relative flex flex-col text-center text-white pt-16 md:pt-32 justify-center items-center px-4">
                    <h1 className="text-2xl md:text-4xl mb-4 font-bold text-white">Unlimited movies, TV shows and more</h1>
                    <h2 className="text-xl md:text-2xl mb-4">Watch anywhere. Cancel anytime.</h2>
                    <p className="mb-4">Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className="flex flex-col md:flex-row items-center">
                        <input className="mr-0 md:mr-4 p-2 border border-green-300 text-black rounded-sm mb-4 md:mb-0 w-full md:w-auto" type="email" placeholder="Email Address" />
                        <button className="bg-red-600 text-white p-2 rounded-sm w-full md:w-auto" onClick={() => navigate("/login")}>Get Started</button>
                    </div>
                </div>
            </div>
            <div className='bg-black z-20 relative mt-8 md:mt-16 lg:mt-24 xl:mt-32'>
                <Features />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
