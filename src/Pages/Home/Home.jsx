import React, { useContext } from 'react';
import HomeBanner from '../../Components/HomeBanner';
import ChefsCardSection from '../../Components/ChefsCardSection';
import UsersFeedback from '../../Components/UsersFeedback';
import ContactsSection from '../../Components/ContactsSection';
import { AuthContext } from '../../Provider/AuthProvider';




const Home = () => {

    const { user } = useContext(AuthContext);
    console.log(user);


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