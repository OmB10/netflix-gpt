import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearch } from '../utils/gptSlice'
import { showGptSearch } from '../utils/gptSlice'

const Header = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
    const [isSignIn, setIsSignIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true);

    // Array of emojis
    const emojis = ['💀', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '🙂', '😝', '👽', '🤖', '😺', '😸', '🐶', '🦁', '🐯', '🐹', '🐰', '🐻', '🐻‍❄️', '🐼'];
    // Select a random emoji
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSignIn(true)
            } else {
                setIsSignIn(false)
            }
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsSignIn(false)
            navigate("/login")
        }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user
                dispatch(
                    addUser({ uid: uid, email: email, displayName: displayName })
                )
                navigate("/browse")
            } else {
                // User is signed out
                dispatch(removeUser())
            }
            return () => unsubscribe();
        });
    }, [])

    const handleGptSearch = () => {
        dispatch(toggleGptSearch())
    }


    return (
        <div className='absolute p-4 md:p-8 py-3 bg-gradient-to-b from-black w-full z-10 flex flex-row justify-between '>
            <img
                className='w-24 md:w-48 cursor-pointer'
                onClick={() => navigate("/")}
                src={LOGO} alt="logo" />
            <div className='flex items-center'>
                {location.pathname === "/" && (
                    <div onClick={() => navigate("/login")} className='bg-red-700 cursor-pointer hover:bg-red-600 px-2 md:px-4 py-1 md:py-2 rounded-lg text-white font-semibold z-30'>Sign In</div>
                )}
            </div>

            {isSignIn && location.pathname === "/browse" && (
                <div className='flex py-2 md:py-5 z-10'>
                    <div className='flex gap-2 md:gap-5 items-center'>
                        <div onClick={handleGptSearch} className='bg-blue-950 hover:bg-blue-900 cursor-pointer flex gap-1 md:gap-2 text-white font-semibold px-2 md:px-4 py-1 md:py-2 rounded-md'>
                            {showGptSearch ? "Home" : <><span>GPT</span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 md:w-6 h-5 md:h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg></>}
                        </div>
                        <div className='bg-black w-8 h-6 md:w-12 md:h-10 rounded-lg text-xl md:text-3xl flex justify-center '>
                            {randomEmoji}
                        </div>
                        <div onClick={handleSignOut} className='bg-red-700 hover:bg-red-600 px-2 md:px-4 py-1 md:py-2 cursor-pointer rounded-lg text-white font-semibold'>Sign Out</div>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Header
