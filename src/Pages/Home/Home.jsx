import React from 'react';
import HomeBanner from '../../Components/HomeBanner';
import ChefsCardSection from '../../Components/ChefsCardSection';
import UsersFeedback from '../../Components/UsersFeedback';




const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <ChefsCardSection></ChefsCardSection>
            <UsersFeedback></UsersFeedback>
        </>
    );
};

export default Home;