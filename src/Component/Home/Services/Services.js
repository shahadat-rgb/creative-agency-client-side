import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ServicesDetails from '../ServicesDetails/ServicesDetails';
import loder from "../../../images/loder.gif"

const Services = () => {
    
    const [service,setService] = useState([])
    useEffect(() => {
         fetch('http://localhost:4000/show-service')         
             .then(res => res.json())
             .then(data => setService(data))
     }, [])
    return (
        <div class='container'>
    
              <h1 className='text-center mb-5 mt-3'>Provide Awesome <span style={{color:'green'}}>Services</span></h1>
  <Row xs={12} className='align-items-center' style={{marginTop:'60px'}}>
  {
                        service.length<1 && 
                        <img src={loder} style={{width:'300px', margin:'auto'}}/>
 }
    { service.map(service => {
        return  <ServicesDetails key={service._id} service={service}> </ ServicesDetails>
    })
        
    }
</Row>
        </div>
    );
};

export default Services;