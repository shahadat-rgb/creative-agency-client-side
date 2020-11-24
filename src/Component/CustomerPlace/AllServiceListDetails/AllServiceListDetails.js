import React from 'react';
import { Grid } from '@material-ui/core';
const AllServiceListDetails = ({showService}) => {
 
    return (
<body style={{ backgroundColor: "rgba(236, 227, 227, 0.329)",padding:'20px'}}>
      <Grid container spacing={3}>
    {showService.map((showService) => ( 
       
       <Grid item md={6}> 
       <div class="card-deck">
            <div style={{width:'100%',height:'45vh',borderRadius:'30px'}} class="card">
              <div  class="card-body">
              <img style={{height:'60px'}} src={`data:image/png;base64,${showService.image.img}`} alt=""/>
              <h2 class="card-title">{showService.title}</h2>
              <p class="card-text">{showService.Description} </p>
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