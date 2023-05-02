import React from 'react';
import HomeBanner from '../../Components/HomeBanner';
import ChefsCardSection from '../../Components/ChefsCardSection';
import UsersFeedback from '../../Components/UsersFeedback';
import ContactsSection from '../../Components/ContactsSection';




const Home = () => {
    return (
        <>
            <HomeBanner></HomeBanner>
            <ChefsCardSection></ChefsCardSection>
            <UsersFeedback></UsersFeedback>
            <ContactsSection></ContactsSection>
        </>
    );
};

export default Home;