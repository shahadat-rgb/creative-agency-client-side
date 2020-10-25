  
import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesDetails.css'
const ServicesDetails = ({serviceInfo}) => {
    return (
    
        <div className='services-design mt-3'>
            <img style={{height:'65px'}} src={serviceInfo.img} alt=""/>
            <h3 className='mt-3 mb-3'> {serviceInfo.serviceName} </h3>
             <p className='text-secondary'>{ serviceInfo.serviceInfo} </p>
        </div>

    );
};

export default ServicesDetails;