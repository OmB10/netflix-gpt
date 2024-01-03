import React, { useState } from 'react'
import Header from './Header'
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)
    const toggleSignInForm = () => setIsSignInForm(!isSignInForm)


    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div>
            <Header />
            <div className='absolute -z-10'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background" />
            </div>

            <div className="absolute bg-black bg-opacity-80 p-8 rounded-lg w-3/12 my-36 left-0 right-0 mx-auto">
                <h2 className="text-white text-3xl mb-6">{isSignInForm ? "Sign In" : "Sign Up"}</h2>

                {!isSignInForm && <input
                    type="text"
                    name="Name"
                    placeholder="Enter Your Name"
                    className="p-2 mb-4 w-full bg-[#454545] text-white rounded"
                />}

                <input
                    type="text"
                    name="email"
                    placeholder="Email or phone number"
                    className="p-2 mb-4 w-full bg-[#454545] text-white rounded"
                />

                <div className="relative">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        className="p-2 w-full bg-[#454545] text-white rounded"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                        {showPassword ? (
                            <EyeOffIcon className="h-6 text-[#8c8c8c]" onClick={() => setShowPassword(false)} />
                        ) : (
                            <EyeIcon className="h-6 text-[#8c8c8c]" onClick={() => setShowPassword(true)} />
                        )}
                    </div>
                </div>
                {!isSignInForm && (
                    <div className="relative mt-4">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="password"
                            placeholder="Confirm Password"
                            className="p-2 w-full bg-[#454545] text-white rounded"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                            {showConfirmPassword ? (
                                <EyeOffIcon className="h-6 text-[#8c8c8c]" onClick={() => setShowConfirmPassword(false)} />
                            ) : (
                                <EyeIcon className="h-6 text-[#8c8c8c]" onClick={() => setShowConfirmPassword(true)} />
                            )}
                        </div>
                    </div>
                )}
                <button className="p-2 w-full bg-red-600 text-white rounded mt-5 mb-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>

                <div className='flex justify-between items-center'>
                    <label className='flex items-center'>

                        <input
                            className='w-5 h-5'
                            type='checkbox'
                        />
                        <span className='ml-1 text-white'>Remember me</span>
                    </label>
                    <h3 className='text-white cursor-pointer'>Need help?</h3>
                </div>

                <div className='mt-10'>
                    <h2 className='text-[#737373]'>{isSignInForm ? "New to Netflix?" : "Already Registered!!"} <span onClick={toggleSignInForm} className='text-white cursor-pointer'>{isSignInForm ? "Sign Up now" : "Sign In now"}</span></h2>
                </div>
            </div>
        </div>

    )
}

export default Login