import React from 'react';
import './ClientFeedback.css'

const ClientFeedback = ({feedback}) => {
    return (
        
        <div className='feedback'>

             <div>
             <img style={{height:'60px',float:'left',marginRight:'10px'}} src={feedback.img} alt=""/>
             <h3> {feedback.name} </h3>
             <h5>{feedback.job}</h5>
             </div>
             <p className='mt-3' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi natus dolorum dolorem harum sunt quisquam esse tenetur la.</p>
             
        </div>
     
    );
};

export default ClientFeedback;