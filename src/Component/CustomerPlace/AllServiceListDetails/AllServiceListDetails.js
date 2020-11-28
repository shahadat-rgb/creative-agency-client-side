import React from 'react';
import { Grid } from '@material-ui/core';
const AllServiceListDetails = ({allService}) => {
 
    return (
<body style={{ backgroundColor: "rgba(236, 227, 227, 0.329)",padding:'20px'}}>
      <Grid container spacing={3}>
    {allService.map((service) => ( 
       
       <Grid item md={6}>
       <div class="card-deck">
            <div style={{width:'100%',height:'35vh',borderRadius:'30px'}} class="card">
              <div  class="card-body">
              <img style={{height:'60px'}} src={`data:image/png;base64,${service.projectImage}`} alt=""/>
              <h2 class="card-title">{service.serviceTitle}</h2>
              <p class="card-text">{service.projectDetails} </p>
           </div>
          </div>
        </div>
           </Grid>
             ))}
    </Grid>
          </body>
    );
};

export default AllServiceListDetails;