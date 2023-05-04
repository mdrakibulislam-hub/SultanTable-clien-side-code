import React from 'react';
import StarRating from './StarRating';
import toast, { Toaster } from 'react-hot-toast';

const RecipesCard = ({ recipe }) => {
    console.log(recipe);
    const { name, ingredients, method, image, rating } = recipe;
    const addToFavBtnHandler = () => toast.success(`${name} Added to favourites`);

    return (
        <div className='flex gap-8 items-center p-8 border rounded-lg'>
            <img className='w-2/12 h-fit rounded-md' src={image} alt="" />
            <div className='flex flex-col w-full gap-4'>
                <div>
                    <h1 className='font-bold text-3xl'>{name}</h1>
                    <p><span className='font-semibold'>Ingredients: </span>{ingredients}</p>
                    <p><span className='font-semibold'>Process of making: </span>{method}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <StarRating rating={rating}></StarRating><p>{rating}</p>
                    </div>
                    <button onClick={addToFavBtnHandler} className='btn bg-[#FFD541] border-none text-black hover:text-white'>Add to favourite</button>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default RecipesCard;