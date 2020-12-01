import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import NavbarLeft from '../NavbarLeft/NavbarLeft';

const Review = () => {
  const history = useHistory();
    const { register, handleSubmit, errors } =useForm();
    const onSubmit= data =>{
        const reviews = {review:data}
        fetch('http://localhost:4000/review-aria',{
          method:'POST',
          headers:{'Content-Type': 'application/json'},
         body:JSON.stringify(reviews)
          
        })
        .then(res =>res.json())
        .then(data =>{
            if (data) {
              alert('reviews conferm successfully')
                history.push('/')
            }
        })
      }
     

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-2">
                 <NavbarLeft></NavbarLeft>
                </div>
                <div className="col-md-10">
                <h4 className='ml-5 mt-4 mb-5'>Review</h4>
                <form class ='order-form-design' onSubmit={handleSubmit(onSubmit)}>
                  
                  <input name="name" ref={register({ required: true })} className='input-value mt-5 ml-5' placeholder="your name" /> <br /> <br />
                           {errors.name && <span className="error">your name is required</span>}
                           
                           <input name="companyName"  ref={register({ required: true })} className='input-value ml-5' placeholder="Company's name Designation" /> <br /> <br />
                           {errors.companyName && <span className="error">companyName is required</span>}

                           <input name="Description" ref={register({ required: true })} className='input-type ml-5' placeholder="Description" /> <br /> <br />
                           {errors.Description && <span className="error">Description is required</span>}

                           <button className="login-btn ml-5"  type="Submit">submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;