import { LinearProgress } from '@material-ui/core';
import React, { useContext, useEffect, useState }  from 'react';
import {Container, Table,} from 'react-bootstrap';
import { UserContext } from '../../../App';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';


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
                            
                            <Table responsive="xs" className='admin-service-list-table' style={{background:'rgba(236, 227, 227, 0.329)'}} >
                                <thead className='admin-service-list-table-head'>
                                    <tr>
                                        <th style={{width:'20%',fontWeight:'bold'}}>Name</th>
                                        <th style={{width:'20%',fontWeight:'bold'}}>Email ID</th>
                                        <th style={{width:'20%',fontWeight:'bold'}}>Service</th>
                                        <th style={{width:'20%',fontWeight:'bold'}}>Project Details</th>
                                        <th style={{width:'20%',fontWeight:'bold'}}>Status</th>
                                    </tr>
                                    
                                </thead>
                                    
                                <tbody>
                                   
                                    {
                                        allServiceList.map(service=>{
                                            return <AdminServiceListDetails key={service._id} service={service}></AdminServiceListDetails>
                                        })
                                    }
                                </tbody>
                            </Table>
                                {
                                        allServiceList.length<1 &&
                                        <LinearProgress color='secondary' style={{width:'100%'}}/>
                                    }
                    </Container>
        </div>
    );
};

export default AdminServiceList;

