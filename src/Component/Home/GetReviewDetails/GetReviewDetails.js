import { Grid } from '@material-ui/core';
import React from 'react';

const GetReviewDetails = ({review}) => {
    return (
      <Grid container spacing={2}>
        {review.map((reviews) => (
          <Grid item md={4} style={{ width: "100%" }} className="mt-3">
            
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">{reviews.review.name}</h4>
                  <h6 class="mb-3">{reviews.review.companyName}</h6>
                  <p class="card-text">{reviews.review.Description}</p>
                </div>
              </div>
          </Grid>
        ))}
      </Grid>
    );
};

export default GetReviewDetails;