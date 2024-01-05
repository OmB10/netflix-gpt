import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isSignIn, setIsSignIn] = useState(false)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsSignIn(true)
            } else {
                setIsSignIn(false)
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            setIsSignIn(false)
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
                navigate("/")
            }
            return () => unsubscribe();
        });
    }, [])


    return (
        <div className='absolute pl-8 py-2 bg-gradient-to-b from-black w-full z-10 flex justify-between '>
            <img
                className='w-48'
                src={LOGO} alt="logo" />

            {isSignIn ? (
                <div className='flex gap-6 p-6 z-10'>
                    <div className='bg-green-500 w-14 h-14 rounded-lg text-3xl flex justify-center items-center'>
                        💀
                    </div>
                    <button onClick={handleSignOut} className='bg-red-600 hover:bg-red-700 px-3 rounded-lg text-white font-semibold'>Sign Out</button>
                </div>
            ) : null}
        </div>
    )
}

export default Header
