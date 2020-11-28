import React, { useContext, useEffect, useState }  from 'react';
import {Container,} from 'react-bootstrap';
import { UserContext } from '../../../App';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [loggedInUser,setLoogedInUser]=useContext(UserContext)
    const [allServiceList,setAllServiceList]=useState([])
    useEffect(() => {
        fetch('http://localhost:4000/show-order')
            .then(res => res.json())
            .then(data =>setAllServiceList(data))
    }, [])
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
            
             <div className="row">
                       <div className="col-md-8">
                       <h4 className='mt-4 ml-5'>Service List</h4>
                       </div>
                       <div className="col-md-4">
                        <h4 className='mt-4'>{loggedInUser.user?.name || 'User'} </h4>
                       </div>
                     </div>
            <Container className='mt-5 admin-service-list-container'>
               <AdminServiceListDetails key={allServiceList._id} allServiceList={allServiceList} ></AdminServiceListDetails>
            </Container>
        </div>
    );
};

export default AdminServiceList;