import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Review = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const [review,setReview]=useState({})
  useEffect(()=>{
    setReview({...review,name:loggedInUser.user?.name})
},[loggedInUser])

  const history = useHistory();

    const { register, errors } =useForm();
  
const addReviewFormHandler=(e)=>{
    e.preventDefault()
    fetch('http://localhost:4000/review-aria',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(review)
    })
    .then(res=>res.json())
    .then(result=>{
           result && notify()
        // history.push('/')
      
    })
  }
const inputHandler=(e)=>{
      setReview({...review, [e.target.name]:e.target.value, img:loggedInUser.user?.img})
  }
     
  const notify = () => toast("Thank you so much for you feedback");
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2">
                 <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                <div className="row">
                       <div className="col-md-8">
                       <h4 className='ml-5 mt-4 mb-5'>Review</h4>
                       </div>
                       <div className="col-md-4">
                      <h4 className='mt-4'> {review.name} </h4>
                  </div>
               </div>
                <form class ='order-form-design' onSubmit={addReviewFormHandler}>
                  
                  <input name="name" value={review.name} onChange={inputHandler} ref={register({ required: true })} className='input-value mt-5 ml-5' placeholder="your name" /> <br /> <br />
                           {errors.name && <span className="error">your nickname is required</span>}
                           
                           <input name="companyName" onBlur={inputHandler} ref={register({ required: true })} className='input-value ml-5' placeholder="Company's name Designation" /> <br /> <br />
                           {errors.companyName && <span className="error">companyName is required</span>}

                           <input name="Description" onBlur={inputHandler} ref={register({ required: true })} className='input-type ml-5' placeholder="Description" /> <br /> <br />
                           {errors.Description && <span className="error">Description is required</span>}

                           <button className="login-btn ml-5"  type="Submit">submit</button>
                    </form>
                </div>
            </div>
            <ToastContainer bodyClassName='toast-color'/>
        </div>
    );
};

export default Review;
