import React, { useContext, useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Registration = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')


    const { createUserHandler, setUser, user } = useContext(AuthContext);

    const handleSignUp = (event) => {
        event.preventDefault();
        createUserHandler(email, password).then(result => {
            setUser(result.user)
            navigate("/")

        })
            .catch(error => console.log(error))
    }

    if (user) {
        return <Navigate to="/" ></Navigate>;
    }

    return (
        <div>
            <div className="relative flex flex-col justify-center my-16 overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md border lg:max-w-xl">
                    <h1 className="text-3xl font-semibold text-center text-black dark:text-white">
                        Sign up
                    </h1>
                    <form onSubmit={handleSignUp} className="mt-6">



                        <div className="mb-2">
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Name
                            </label>
                            <input
                                onChange={e => setName(e.target.value)}
                                type="text"
                                id='name'
                                name='name'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>


                        <div className="mb-2">
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Email
                            </label>
                            <input
                                onChange={e => setEmail(e.target.value)}
                                type="email"
                                id='email'
                                name='email'
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
                                onChange={e => setPassword(e.target.value)}
                                type="password"
                                id='password'
                                name='password'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>



                        <div className="mb-2">
                            <label
                                htmlFor="photourl"
                                className="block text-sm font-semibold text-gray-800"
                            >
                                Photo URL
                            </label>
                            <input
                                onChange={e => setPhotoURL(e.target.value)}
                                type="text"
                                id='photourl'
                                name='photourl'
                                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>


                        <div className="mt-6">
                            <button type='submit' className="btn border-none w-full px-4 py-2 tracking-wide text-black transition-colors duration-200 transform bg-[#FFE382] rounded-md hover:text-white">
                                Sign up
                            </button>
                        </div>
                    </form>



                    <p className="mt-8 text-xs font-light text-center text-gray-700">
                        {" "}
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-purple-600 hover:underline"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;