import { Grid, Link } from '@material-ui/core';
import React from 'react';

const CustomerAddServiceDetails = ({cousterAddService}) => {
 
    return (
      
      <Grid container spacing={2}>
    {cousterAddService.map((cousterAddService) => ( 
       
       <Grid item md={4}>
       
            <div class="card services-design mt-3">
              <div class="card-body ">
              <img style={{height:'60px',}} src={`data:image/png;base64,${cousterAddService.image.img}`} alt=""/>
              <h2 class="card-title">{cousterAddService.title}</h2>
            <p class="card-text">{cousterAddService.Description} </p>
           </div>
          </div>
    
           </Grid>
        
             ))}
    </Grid>
    
    );
};

export default CustomerAddServiceDetails;