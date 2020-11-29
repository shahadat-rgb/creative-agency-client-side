import React from 'react';
import { Col,Card } from 'react-bootstrap';
const AllServiceListDetails = ({service}) => {
 
    return (

      <Col xs={12} md={10} lg={6} className='text-left' >
<Card className='general-service-list-details-card mt-5 mb-5' style={{ width: '90%',margin:'auto', borderRadius:'10px' }}>
    <Card.Body style={{margin:'auto'}}>
        <div className='d-flex justify-content-between align-items-center'>
            <img style={{height:'60px'}} src={`data:image/png;base64,${service.projectImage}`} alt=""/>
            
            { service.status === 'done' &&  <p style={{background:'#C6FFE0', color:'#009444', borderRadius:'5px', padding:'5px 10px'}}>
            {service.status}
            </p>
             }
                {service.status === 'pending'&& <p style={{background:'#FFE3E3', color:'#FF4545', borderRadius:'5px', padding:'5px 10px'}}>
                {service.status}
            </p>
            }
            
        </div>
        <Card.Title style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}> <h2 class="card-title">{service.serviceTitle}</h2></Card.Title>
            <Card.Text style={{fontSize:'16px', fontWeight:'300'}}>
            {service.projectDetails}
            </Card.Text>
        </Card.Body>
    </Card>
</Col> 
         
    );
};

export default AllServiceListDetails;