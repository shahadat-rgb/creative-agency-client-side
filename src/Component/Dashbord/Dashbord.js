import React, { useContext, } from 'react';
import { UserContext } from '../../App';
import ServiceList from './ServiceList/ServiceList';
const Dashbord = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
        <div>
           <ServiceList></ServiceList>
        </div>
    );
};

export default Dashbord;