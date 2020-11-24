import React, { useEffect, useState } from 'react';
import AllServiceListDetails from '../AllServiceListDetails/AllServiceListDetails';

const AllServiceList = () => {
  const [showService,setShowService] =useState([])
 useEffect(() => {
      fetch('http://localhost:4000/show-service')
          .then(res => res.json())
          .then(data => setShowService(data))
  }, [])
    return (
        <div className='container'> 
      <h4 className='mt-4 ml-5 mb-5'>Servis list</h4>   
  <AllServiceListDetails showService={showService}></AllServiceListDetails> 


    
         </div>
    );
};

export default AllServiceList;