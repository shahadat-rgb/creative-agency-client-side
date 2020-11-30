import { useContext } from 'react';
import { Col,Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './ServicesDetails.css'
const ServicesDetails = ({service}) => {

  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const history=useHistory()
  const orderCardHandler=()=>{
      setLoggedInUser({...loggedInUser,service:service})
      history.push('/dashbord/order')
  }
  return (
   <Col xs={12} sm={6} md={4} className='text-center'>
<Card onClick={orderCardHandler} className='service-details-card mt-5' style={{ width: '18rem',border:'none',margin:'auto' }}>
    <Card.Body>
        <img style={{width:'74px', marginBottom:'10px', borderRadius:'100%'}} src={`data:image/png;base64,${service.image.img}`} alt=""/>
        <Card.Title style={{fontSize:'20px', fontWeight:'600', color:'#111430'}}>{service.title}</Card.Title>
            <Card.Text style={{fontSize:'16px', fontWeight:'300'}}>
            {service.Description}
            </Card.Text>  
        </Card.Body>
    </Card>
</Col> 
     
    );
};

export default ServicesDetails;

