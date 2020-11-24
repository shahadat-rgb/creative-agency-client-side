import { Link } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import CustomerAddServiceDetails from '../CustomerAddServiceDetails/CustomerAddServiceDetails';

const CoustomerAddService = () => {
    const [cousterAddService,setCousterAddService] = useState([])
    useEffect(() => {
         fetch('http://localhost:4000/show-service')         
             .then(res => res.json())
             .then(data => setCousterAddService(data))
     }, [])
    return (
        <div class='container'>
            <a style={{textDecoration:'none',color:'black'}} href='/customerPlaceDashbord/order'> <CustomerAddServiceDetails  cousterAddService={cousterAddService}> </ CustomerAddServiceDetails></a>
        </div>
        
    );
};

export default CoustomerAddService;