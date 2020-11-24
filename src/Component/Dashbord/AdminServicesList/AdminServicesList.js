import React, { useEffect, useState }  from 'react';
import {Container,} from 'react-bootstrap';
import AdminServiceListDetails from '../AdminServiceListDetails/AdminServiceListDetails';
import './AdminServiceList.css'

const AdminServiceList = () => {
    const [order,setOrder] =useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getOrderAdmin')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])
    return (
        <div style={{marginTop:'10px', marginBottom:'10px'}}>
             <h4 className='mt-4 ml-5'>Service List</h4>
            <Container className='mt-5 admin-service-list-container'>
               <AdminServiceListDetails order={order} ></AdminServiceListDetails>
            </Container>
        </div>
    );
};

export default AdminServiceList;