import { Grid } from '@material-ui/core';
import React from 'react';
import service1 from '../../../images/icons/service1.png'
import service2 from '../../../images/icons/service2.png'
import service3 from '../../../images/icons/service3.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const allService =[
    {
        img:service1,
        serviceName:'Web & Mobile Design',
        serviceInfo:'we craft stunning and amazing  web ui,using a well drafted ux  to fit your product brand stand out',

    },
    {
        img:service2,
        serviceName:'Grapic Design',
        serviceInfo:'Amazing flyers social media posts and brand representations  that would make your brand  stand out',

    },
    {
        img:service3,
        serviceName:'Web Development',
        serviceInfo:'with well written codes ,we build amazing apps for all  platforms,mobile and web  apps in general',

    },
]
const Services = () => {
    
    return (
        <div className='container'>
            <h1 className='text-center mt-5 mb-5'>
                provide awosome <span style={{color:'green'}}>services</span>
           </h1>
            <Grid container spacing={3}>

                {
                   allService.map(svc => <Grid item md ={4}><ServicesDetails   serviceInfo={svc}></ServicesDetails>  </Grid> )
                }

            </Grid>
             
        </div>
    );
};

export default Services;