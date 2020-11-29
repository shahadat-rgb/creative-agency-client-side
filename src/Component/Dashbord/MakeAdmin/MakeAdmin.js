import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserContext } from '../../../App';
import Sidebar from '../../CustomerPlace/Sidebar/Sidebar';

const MakeAdmin = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
       const [admin,setAdmin] =useState('')

    const { register, errors } =useForm();

    const addAdminHandler=(e)=>{
      e.preventDefault()
      fetch('http://localhost:4000/add-admin',{
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({admin})
      })
      .then(res=>res.json())
      .then(result=>{
        result && notify()
      })
    }
    const notify = () => toast("Wow! added a new admin");
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2">
           <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                   
             <div className="row">
              <div className="col-md-8">
              <h4 className='ml-5 mt-4 mb-5'>Make admin</h4>
              </div>
              <div className="col-md-4">
                <h4 className="mt-4">
                  {loggedInUser.user?.name || 'User'}
                </h4>
              </div>
            </div>
                     <form class ='order-form-design' onSubmit={addAdminHandler}>

                     <h4 className='ml-5  pt-5'>Email</h4>
                     <input  style={{border:'1px solid lightgray'}} name="email" ref={register({ required: true })} className='input-value ml-5' placeholder="your email address" onBlur={e=>setAdmin(e.target.value)} /> <br /> <br/>
                          {errors.email && <span className="error">your Email is required</span>}
                     <span>  <button style={{borderRadius:'8px',border:'none', marginLeft:'45px',backgroundColor:'green',color:'white',padding:'8px 23px 8px 23px'}}   type="submit">submit</button> </span>
                   </form>
                <span> 
            </span>
         </div>
     </div>
    <ToastContainer bodyClassName='toast-color'/>
        </div>
    );
};

export default MakeAdmin;
