import React from 'react';
import { useForm } from 'react-hook-form';
import NavbarLeft from '../NavbarLeft/NavbarLeft';
import './Order.css'
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';
const Order = () => {
   const history = useHistory()
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, errors } =useForm();
    const onSubmit= data =>{
        const ordered = {...loggedInUser , order:data}
        fetch('http://localhost:4000/order',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
         body:JSON.stringify(ordered)
          
        })
        .then(res =>res.json())
        .then(data =>{
            if (data) {
              alert('order conferm successfully')
              history.push('/adminPlaceDashbord/services-list')
            }
        })
      }

  
    return (
        <div className="container">
              <div className="row">
                  <div className="col-md-2">
                     <NavbarLeft></NavbarLeft>
                  </div>
                   <div className="col-md-10">
                      <h4 className='ml-5 mt-4 mb-5'>Order</h4>
                    
                        <form class ='order-form-design' onSubmit={handleSubmit(onSubmit)}>
                  
                           <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} className='input-value mt-5 ml-5' placeholder="your name/your company name" /> <br /> <br />
                                    {errors.name && <span className="error">your name/your company name</span>}
                                    <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} className='input-value ml-5' placeholder="your email address" /> <br /> <br />
                                    {errors.email && <span className="error">your Email is required</span>}

                                    <input name="projectName" ref={register({ required: true })} className='input-value ml-5' placeholder="your project name" /> <br /> <br />
                                    {errors.projectName && <span className="error">your projectName is required</span>}

                                    <input name="projectDetails" ref={register({ required: true })} className='input-type ml-5' placeholder='your project details' /> <br /> <br />
                                    {errors.projectDetails && <span className="error">your project details</span>}

                                        <input name='price' ref={register({ required: true })} className='input-value ml-5  mb-5' placeholder="price" /> <br/> <br/>
                                        {errors.price && <span className="error">price is required</span>}
                                       

                                    <button className="login-btn ml-5"  type="submit">Send</button>
                                    </form>
                                   
                                 </div>
                
                   
             </div>
      </div>
                  
    );
};

export default Order;