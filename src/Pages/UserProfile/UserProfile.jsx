import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const UserProfile = () => {
    const { user, handleUpdateProfile } = useContext(AuthContext);


    const [name, setName] = useState('')
    const [photoURL, setPhotoURL] = useState('')

    const urlREGX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/

    const handleUpdateProfileEvent = (event) => {

        event.preventDefault();
        if (!name || !photoURL) { toast.error("Please provide your name and photo url"); return }
        if (!urlREGX.test(photoURL)) { toast.error("Please provide valid image url and don't forget to include http or https"); return }

        handleUpdateProfile(name, photoURL)
            .then(() => {
                window.location.reload()
            }).catch((error) => {
                toast.error(error.message);
            });

    }

    console.log(name, photoURL);

    return (
        <div className='main-container my-8'>
            <p className='my-4 font-semibold text-xl'>Profile Information</p>
            {user && <figure className='w-20 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure>}
            {user && <h1 className='font-semibold text-3xl my-4'>{user.displayName && user.displayName}</h1>}
            {user && <p className='my-4'>Email: {user.email && user.email}</p>}



            <label htmlFor="my-modal-4" className='btn bg-[#FFC700] text-black hover:text-white border-none'>Update profile</label>


            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold">Enter name and photo link bellow</h3>


                    <form onSubmit={handleUpdateProfileEvent} className="mt-6">



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
                                Update Profile
                            </button>

                        </div>
                    </form>








                </label>
            </label>
            <Toaster />
        </div>
    );
};

export default UserProfile;