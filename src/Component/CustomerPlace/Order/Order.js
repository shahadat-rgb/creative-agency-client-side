import { useForm } from 'react-hook-form';
import NavbarLeft from '../Sidebar/Sidebar';
import './Order.css'
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';


const Order = () => {
const { register, errors } =useForm();
const history=useHistory()
const [loggedInUser,setLoggedInUser]=useContext(UserContext)
const [order,setOrder]=useState({status:'pending'})

useEffect(()=>{
  setOrder({...order,name:loggedInUser.user?.name,
    email:loggedInUser.user?.email,
    projectImage:loggedInUser.service.image?.img,
            serviceTitle:loggedInUser.service?.title,
            projectDetails:loggedInUser.service?.Description,
  })
},[loggedInUser])

console.log(loggedInUser);

const addOrderHandler=(e)=>{
  e.preventDefault()
  fetch('http://localhost:4000/order',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(order)
  })
  .then(res=>res.json())
  .then(result=>{
      if (result) {
        alert('wow order conferm successfully')
       history.push('/customerPlaceDashbord/service-list')
      }
  })
}
    const inputHandler=(e)=>{
      setOrder({...order, [e.target.name]:e.target.value})
  }
  
    return (
        <div className="container">
              <div className="row">
                  <div className="col-md-2">
                     <NavbarLeft></NavbarLeft>
                  </div>
                   <div className="col-md-10">
                     <div className="row">
                       <div className="col-md-8">
                       <h4 className='ml-5 mt-4 mb-5'>Order</h4>
                       </div>
                       <div className="col-md-4">
                        <h4 className='mt-4'>{loggedInUser.user?.name || 'User'} </h4>
                       </div>
                     </div>
                    
                        <form class ='order-form-design' onSubmit={addOrderHandler}>
                  
                           <input name="name" onBlur={inputHandler}  ref={register({ required: true })} className='input-value mt-5 ml-5' placeholder="your name/your company name" value={order.name} /> <br /> <br />
                                    {errors.name && <span className="error">your name/your company name</span>}
                                    <input name="email"  onBlur={inputHandler} ref={register({ required: true })} className='input-value ml-5' placeholder="your email address" value={order.email} /> <br /> <br />
                                    {errors.email && <span className="error">your Email is required</span>}

                                    <input name="serviceTitle" onBlur={inputHandler} ref={register({ required: true })} className='input-value ml-5' placeholder="your project name" value={order.serviceTitle}   /> <br /> <br />
                                    {errors.serviceTitle && <span className="error">your projectName is required</span>}

                                    <input name="projectDetails"  onBlur={inputHandler} ref={register({ required: true })} className='input-type ml-5' placeholder='your project details' value={order.projectDetails} /> <br /> <br />
                                    {errors.projectDetails && <span className="error">your project details</span>}
                                      

                                        <input name='price' onBlur={inputHandler} ref={register({ required: true })} className='input-value ml-5  mb-5' placeholder="price" /> <br/> <br/>
                                        {errors.price && <span className="error">price is required</span>}
                                       

                                    <button className="login-btn ml-5"  type="submit">Send</button>
                                    </form>
                                   
                                 </div>
                            </div>
                            
                   </div>
                  
    );
};

export default Order;


