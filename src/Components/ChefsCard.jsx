import React from 'react';
import { Link } from 'react-router-dom';


const ChefsCard = ({ chef }) => {
    const { id, name, image, likes, origin, recipes, recipeLengths } = chef

    return (
        <div className='flex flex-col justify-center items-center bg-[#FFE382] p-8 gap-2 rounded-lg'>
            <img className='w-2/6 rounded-full' src={image} alt="" />
            <h1 className='font-bold text-2xl'>{name}</h1>
            <p>Origin: {origin}</p>
            <p>Total likes: {likes}</p>
            <p>Total Recipe: {recipes.length}</p>
            <Link to={`/alldata/${id}`} className='bg-[#FFC700] p-2 w-full rounded-md text-center btn font-medium text-black hover:text-white border-none' ><button>View Recipes</button></Link>

        </div>
    );
};

export default ChefsCard;