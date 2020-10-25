import { Grid } from '@material-ui/core';
import React from 'react';
 import Nash from '../../../images/customer-1.png'
 import Miriam from '../../../images/customer-2.png'
 import Bria from '../../../images/customer-3.png'
import ClientFeedback from '../ClientFeedback/ClientFeedback';
const clientFeedback =[
    {
       name:'Nash patrik',
       job:'CE0,Manpol',
       img:Nash
    },
    {
        name:'Miriam Barran',
        job:'CE0,Manpol',
        img:Miriam
    },
    {
       name:'Bria smath',
       job:'CE0,Manpol',
       img:Bria
    },
]

const Feedback = () => {
    return (
        <div className='container'>
              <h1 className='text-center mb-5'>Clients <span style={{color:'green'}}>Feedback</span></h1>
          <Grid  container spacing={2}>
            
         {
             clientFeedback.map(feedback =><Grid item md={4}> <ClientFeedback feedback={feedback} ></ClientFeedback>  </Grid> )
             
         }

          </Grid>
        </div>
    );
};

export default Feedback;