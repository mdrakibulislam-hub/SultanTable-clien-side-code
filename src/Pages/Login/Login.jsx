import React from 'react';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
    return (
        <div className="relative flex flex-col justify-center my-16 overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md border lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-black dark:text-white">
                    Login
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label
                            htmlFor="email"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id='email'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <div className="mb-2">
                        <label
                            htmlFor="password"
                            className="block text-sm font-semibold text-gray-800"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id='password'
                            className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>
                    <a
                        href="#"
                        className="text-xs text-purple-600 hover:underline"
                    >
                        Forget Password?
                    </a>
                    <div className="mt-6">
                        <button className="btn border-none w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#FFE382] rounded-md hover:text-white">
                            Login
                        </button>
                    </div>
                </form>


                <div className='flex gap-4 justify-center items-center my-8'>


                    <button className='flex gap-2 items-center text-white btn bg-blue-700 hover:bg-blue-800 border-none'>
                        <span>Login with</span> <FaGoogle></FaGoogle>
                    </button>

                    <button className='flex gap-2 items-center text-white btn bg-gray-800 hover:bg-gray-900 border-none'>
                        <span>Login with</span> <FaGithub></FaGithub>
                    </button>


                </div>

                <p className="mt-8 text-xs font-light text-center text-gray-700">
                    {" "}
                    Don't have an account?{" "}
                    <a
                        href="#"
                        className="font-medium text-purple-600 hover:underline"
                    >
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;