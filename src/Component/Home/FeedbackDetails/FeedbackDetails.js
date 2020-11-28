import { Grid } from '@material-ui/core';
import React from 'react';
import './FeedbackDetails.css'

const FeedbackDetails = ({feedback}) => {
    return (
            <Grid container spacing={2}>
              {feedback.map((feedback) => (
                <Grid item md={4} style={{ width: "100%" }} className="mt-3">
                 <div className="card">
                <div className="card-body">
                <div className='d-flex feedback-top'>
                        <img style={{width:'64px', height:'64px', borderRadius:'50%'}} src={feedback.img} alt=""/>
                    <div className='ml-3 mt-1'>
                            <h5 style={{fontSize:'20px',fontWeight:'600'}}>{feedback.name}</h5>
                            <p style={{fontSize:'16px',fontWeight:'600'}}>{feedback.companyName}</p>
                    </div>
                       
                    </div>   
                <div className='feedback-description'>
                   <p className='mt-2' style={{fontSize:'16px',fontWeight:'400'}}> {feedback.Description}</p>
               </div>
                </div>
                </div> 
                   
          </Grid>
      ))}
 </Grid>
     
    );
};

export default FeedbackDetails;
/* <div class="card">
<div class="card-body">
  <h4 class="card-title">{reviews.review.name}</h4>
  <h6 class="mb-3">{reviews.review.companyName}</h6>
  <p class="card-text">{reviews.review.Description}</p>
</div>
</div> */