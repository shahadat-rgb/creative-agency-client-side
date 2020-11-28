import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AllServiceListDetails from '../AllServiceListDetails/AllServiceListDetails';
import loder from "../../../images/loder.gif"
const AllServiceList = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const [allService,setAllService]=useState([])
  
 useEffect(()=>{
      fetch('http://localhost:4000/show-order-by-mail',{
          method:'GET',
          headers:{
              'Content-Type':'application/json',
              email:loggedInUser.user?.email,
          }
      })
      .then(res=>res.json())
      .then(result=>{
          setAllService(result)
      })
  },[])
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
          <h4 className='mt-4 ml-5 mb-5'>Servis list</h4>   
          </div>
          <div className="col-md-4">
          <h4 className="mt-4">{loggedInUser.user?.name || 'User'} </h4>
          </div>
        </div>
        {
                allService.length<1 && 
                <img src={loder} style={{width:'300px', margin:'auto'}}/>
        }
        <AllServiceListDetails key={allService._id} allService={allService} ></AllServiceListDetails>
       
      </div>
    );
};

export default AllServiceList;
