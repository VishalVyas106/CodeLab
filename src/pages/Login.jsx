import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { doSignInWithGoogle } from '../firebase/auth';
import { useAuth } from '../context/AuthContext';
import Navbar from '../components/Navbar';

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithGoogle();
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
            {/* {userLoggedIn && <Navigate to="/" replace={true} />} */}
            
            <Navbar />

            <div className="min-h-screen flex items-center justify-center p-4">
                <div className="w-full max-w-6xl flex rounded-2xl shadow-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm">
                    {/* Left Side Content */}
                    <div className="hidden lg:flex lg:w-1/2 flex-col justify-center p-12 bg-gradient-to-br from-blue-800/50 via-blue-900/50 to-transparent text-white">
                        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Welcome to CodeLab
                        </h1>
                        <p className="text-xl mb-8 text-gray-300">
                            Empowering students to code, create, and innovate together.
                        </p>
                        <div className="space-y-4 text-gray-300">
                            <p className="flex items-center">
                                <span className="mr-2">🚀</span>
                                Learn from peer developers
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">💡</span>
                                Work on exciting projects
                            </p>
                            <p className="flex items-center">
                                <span className="mr-2">🤝</span>
                                Join a community of innovators
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Login */}
                    <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center items-center">
                        <div className="w-full max-w-md space-y-8 text-center">
                            {/* Mobile version of title - only shows on smaller screens */}
                            <div className="lg:hidden text-white mb-8">
                                <h1 className="text-4xl font-bold mb-4">Welcome to CodeLab</h1>
                                <p className="text-gray-300">Empowering students to code, create, and innovate together.</p>
                            </div>

                            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm">
                                <h2 className="text-2xl font-semibold text-white mb-6">Sign in to your account</h2>
                                
                                <button
                                    disabled={isSigningIn}
                                    onClick={onGoogleSignIn}
                                    className={`w-full flex items-center justify-center py-3 px-4 rounded-lg text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 transition-all duration-300 ${isSigningIn ? 'opacity-70 cursor-not-allowed' : ''}`}
                                >
                                    <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0)">
                                            <path d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z" fill="#ffffff"/>
                                            <path d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z" fill="#ffffff"/>
                                            <path d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z" fill="#ffffff"/>
                                            <path d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z" fill="#ffffff"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0">
                                                <rect width="48" height="48" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    {isSigningIn ? 'Signing In...' : 'Sign in with Google'}
                                </button>

                                {errorMessage && (
                                    <p className="mt-4 text-red-400 text-sm">{errorMessage}</p>
                                )}

                                <p className="mt-6 text-sm text-gray-400">
                                    Officially recognized and verified by AMPICS College
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;