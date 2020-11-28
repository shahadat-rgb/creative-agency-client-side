import React, { useEffect, useState } from 'react';

import FeedbackDetails from '../FeedbackDetails/FeedbackDetails';

const Feedback = () => {
    const [ feedback,setFeedback] =useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getReview')
            .then(res => res.json())
            .then(data =>{
                setFeedback(data)
             })
    }, [])
    return (
        <div class='container '>
               <h1 className='text-center mb-5 mt-3'>Clients <span style={{color:'green'}}>Feedback</span></h1>
             <FeedbackDetails key={feedback._id} feedback={feedback}> </FeedbackDetails>
        
        </div>
    );
};

export default Feedback;
