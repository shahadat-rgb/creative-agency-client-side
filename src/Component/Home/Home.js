import React from 'react';
import AgencyPartnerName from './AgencyPartnerName/AgencyPartnerName';
import CoustomerAddService from './CustomerAddService/CoustomerAddService';
import Feedback from './Feedback/Feedback';
import Footer from './Footer/Footer';
import GetReview from './GetReview/GetReview';
import Header from './Header/Header';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
       <Header></Header>
       <AgencyPartnerName></AgencyPartnerName>
       <Services></Services>
       <CoustomerAddService></CoustomerAddService>
       <OurWork></OurWork>
       <Feedback></Feedback>
       <GetReview></GetReview>
       <Footer></Footer>
        </div>
    );
};

export default Home;