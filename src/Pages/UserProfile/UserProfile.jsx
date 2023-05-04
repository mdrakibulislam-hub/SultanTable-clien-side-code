import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='main-container my-8'>
            <p className='my-4 font-semibold text-xl'>Profile Information</p>
            {user && <figure className='w-20 h-fit'><img className='w-full rounded-full' src={user.photoURL && user.photoURL} alt="" /></figure>}
            {user && <h1 className='font-semibold text-3xl my-4'>{user.displayName && user.displayName}</h1>}
            {user && <p className='my-4'>Email: {user.email && user.email}</p>}
        </div>
    );
};

export default UserProfile;