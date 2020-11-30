import React, { useContext, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import AdminServiceList from './AdminServiceList/AdminServiceList';
import UserServiceList from './UserServiceList/UserServiceList';


const ServiceList = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    useEffect(()=>{
        loggedInUser.user &&  fetch('http://localhost:4000/check-admin',{
          method:'GET',
          headers:{
            'Content-Type':'application/json',
            email:loggedInUser.user?.email
          }
        })
        .then(res=>res.json())
        .then(result=>{
          result && setLoggedInUser({...loggedInUser,admin:result})
        })
      },[])
console.log(loggedInUser.user)
    return (
        <div className='container'>
          <div className="row">
            <div className="col-md-2">
            <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
            {loggedInUser.admin && <AdminServiceList></AdminServiceList>}
                    
            {!loggedInUser.admin && <UserServiceList></UserServiceList>}
            </div>
          </div>
        </div>
    );
};

export default ServiceList;