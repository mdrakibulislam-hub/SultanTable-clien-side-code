import React from 'react';

const RecipesCard = ({ recipe }) => {
    console.log(recipe);
    const { name, ingredients, method, image, rating } = recipe
    return (
        <div className='flex gap-8 items-center p-8 border rounded-lg'>
            <img className='w-2/12 h-fit rounded-md' src={image} alt="" />
            <div className='flex flex-col w-full'>
                <div>
                    <h1><span>Recipe name: </span>{name}</h1>
                    <p><span>Ingredients: </span>{ingredients}</p>
                    <p><span>Process of making: </span>{method}</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>star rating here...</p>
                    <button className='btn'>Add to favourite</button>
                </div>
            </div>
        </div>
    );
};

export default RecipesCard;