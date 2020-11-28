import React from 'react';
import AgencyPartnerName from './AgencyPartnerName/AgencyPartnerName';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Services from './Services/Services';
import Slider from './Slider/Slider'
const Home = () => {
    return (
        <div>
       <Header></Header>
       <AgencyPartnerName></AgencyPartnerName>
       <Services></Services>
       <Slider></Slider>
       <Feedback></Feedback>
       <Footer></Footer>
        </div>
    );
};

export default Home;