import React from 'react';
import AgencyPartnerName from './AgencyPartnerName/AgencyPartnerName';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
       <Header></Header>
       <AgencyPartnerName></AgencyPartnerName>
       <Services></Services>
       <OurWork></OurWork>
       <Feedback></Feedback>
       <Footer></Footer>
        </div>
    );
};

export default Home;