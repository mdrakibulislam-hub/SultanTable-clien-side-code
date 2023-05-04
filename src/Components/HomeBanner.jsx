import React from 'react';


const HomeBanner = () => {
    return (
        <div className='main-container home-banner-container bg-no-repeat bg-cover mt-8 rounded-lg bg-fixed py-32'>

            <div className='text-center my-auto'>
                <p className='text-2xl text-white'>Discovering the Magic of</p>
                <h1 className='text-uppercase font-bold text-6xl uppercase tracking-widest transition-all ease-in inline-block text-[#FFE382]'>Arabia</h1>
                <p className='text-lg italic text-white'>&quot; A blog about the food, <br></br>culture, and
                    people of the Arabian world &quot;
                </p>
            </div>

        </div>
    );
};

export default HomeBanner;