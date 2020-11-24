import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import GetReviewDetails from '../GetReviewDetails/GetReviewDetails';

const GetReview = () => {
    const [review,setReview] =useState([])
    useEffect(() => {
        fetch('http://localhost:4000/getReview')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <div class='container '>
             <GetReviewDetails review={review}> </GetReviewDetails>
        </div>
    );
};

export default GetReview;