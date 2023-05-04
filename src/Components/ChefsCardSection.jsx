import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';
import LoadingSpinner from './LoadingSpinner';

const ChefsCardSection = () => {
    const [loading, setLoading] = useState(true)
    const [allChefs, setAllChefs] = useState([])
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-sid-rakibulislamborkan-gmailcom.vercel.app/alldata').then(res => res.json()).then(data => setAllChefs(data));
        setLoading(false)
    }, [])

    if (loading) { return <LoadingSpinner></LoadingSpinner> }

    else
        return (
            <div className='main-container'>
                <h1 className='text-center font-semibold text-3xl py-8'>Our Excellent Chefs</h1>
                <div className='grid md:grid-cols-2 md:grid-cols-3 gap-8 w-10/12 mx-auto'>
                    {allChefs.map(chef => <ChefsCard key={chef.id} chef={chef}></ChefsCard>)}
                </div>
            </div>
        );
};

export default ChefsCardSection;