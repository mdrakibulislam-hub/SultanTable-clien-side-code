import React from 'react';

const UsersFeedback = () => {
    return (
        <div className='main-container mt-10'>
            <h1 className='text-center font-semibold text-3xl py-8'>What Users Are Saying About Us</h1>


            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center'>

                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/9g1kzFv/w1.jpg" alt="" />
                    <p className='text-sm'> &quot; I absolutely love this food blog! The recipes are easy to follow and always turn out delicious. I appreciate the variety of cuisines and the use of fresh, healthy ingredients. &quot;</p>
                    <p className='font-semibold text-xl'>- Sarah, 32</p>
                </div>


                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/cxSV2DB/w2.jpg" alt="" />
                    <p className='text-sm'>&quot; This food blog is my go-to for weeknight dinners. The recipes are quick, affordable, and always satisfying. I also appreciate the helpful tips and substitution ideas. &quot;</p>
                    <p className='font-semibold text-xl'>- Tom, 25</p>
                </div>

                <div className='flex flex-col gap-4 justify-between items-center'>
                    <img className='w-2/6 mx-auto rounded-full' src="https://i.ibb.co/smJSGqr/w3.jpg" alt="" />
                    <p className='text-sm'>&quot; I recently discovered this food blog and I&apos;m obsessed! The food photography is stunning and the recipes are creative and flavorful. I love trying new things and this blog definitely delivers. &quot;</p>
                    <p className='font-semibold text-xl'>- Laura, 28</p>
                </div>



            </div>
        </div>
    );
};

export default UsersFeedback;