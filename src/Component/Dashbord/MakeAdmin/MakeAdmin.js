import React from 'react';
import { useForm } from 'react-hook-form';
import NavbarLeftTwo from '../NavbarLeftTwo/NavbarLeftTwo';


const MakeAdmin = () => {
    const { register, handleSubmit, errors } =useForm();
    const onSubmit =data=>{
     console.log(data);   
    }
   
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2">
           <NavbarLeftTwo></NavbarLeftTwo>
                </div>
                <div className="col-md-10">
                     <h4 className='ml-5 mt-4 mb-5'>Make admin</h4>
                     <form class ='order-form-design' onSubmit={handleSubmit(onSubmit)}>

                         <h4 className='ml-5  pt-5'>Email</h4>
                     <input  style={{border:'1px solid lightgray'}} name="email" ref={register({ required: true })} className='input-value ml-5' placeholder="your email address" /> <br /> <br/>
                                    {errors.email && <span className="error">your Email is required</span>}

                    <span>  <button style={{borderRadius:'8px',border:'none', marginLeft:'45px',backgroundColor:'green',color:'white',padding:'8px 23px 8px 23px'}}   type="submit">submit</button> </span>
                      
                     </form>
                <span> </span>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;