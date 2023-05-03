import React, { useEffect, useState } from 'react';
import ChefsCard from './ChefsCard';

const ChefsCardSection = () => {
    const [allChefs, setAllChefs] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/alldata').then(res => res.json()).then(data => setAllChefs(data))
    }, [])

    return (
        <div className='main-container'>
            <h1 className='text-center font-semibold text-3xl py-8'>Our Excellent Chefs</h1>
            <div className='grid grid-cols-3 gap-8 w-10/12 mx-auto'>
                {allChefs.map(chef => <ChefsCard key={chef.id} chef={chef}></ChefsCard>)}
            </div>
        </div>
    );
};

export default ChefsCardSection;