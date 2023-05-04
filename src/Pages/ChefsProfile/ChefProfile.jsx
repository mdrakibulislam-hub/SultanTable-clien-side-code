import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipesCard from '../../Components/RecipesCard';
import LazyLoad from 'react-lazy-load';


const ChefProfile = () => {
    const { id } = useParams();
    const [chef, setChef] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/alldata/${id}`).then(res => res.json()).then(data => setChef(data[0]))
    }, [id])
    const { name, image, likes, experience, bio, origin, recipes } = chef

    return (
        <div className='main-container'>

            <div className='flex items-center gap-8 my-8 border-b py-4'>

                <LazyLoad width={450} threshold={0.95}>
                    <img className='rounded-full' src={image} alt="" />
                </LazyLoad>

                <div>
                    <h1 className='font-bold text-3xl'>{name}</h1>
                    <h1 className='font-bold text-xl'>Bio:</h1>
                    <p>{bio}</p>
                    <p><span className='font-semibold'>Experience:</span> {experience} Years</p>
                    <p><span className='font-semibold'>Origin:</span> {origin}</p>
                    <p><span className='font-semibold'>Total likes:</span> {likes}</p>

                </div>

            </div>

            <h1 className='font-bold text-3xl'>
                Recipes
            </h1>
            <div className='grid gap-4 mt-8'>
                {recipes && recipes.map(recipe => <RecipesCard key={recipe.id} recipe={recipe}></RecipesCard>)}
            </div>

        </div>
    );
};

export default ChefProfile;