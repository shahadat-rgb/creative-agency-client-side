  
import React from 'react';
import  Frame from  '../../../images/logos/Frame.png'
import Navbar from '../Navbar/Navbar';

import './Header.css'
const Header = () => {
    return (
   <section className='header-bg'>
         <div className="container">
               <Navbar></Navbar>
            <div style={{paddingBottom:'100px'}} className="row d-flex align-items-center">
                <div className="col-md-5">
                   <h1>Let's Grow Your <br/>Brand To The <br/>Next Level</h1>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic minima nulla non a ab dolore amet aut praesentium explicabo unde accusantium esse velit modi, itaque enim voluptates consectetur et numquam voluptatibus?</p>
                   <button className='login-btn'>Hire Us</button>
                </div>
                <div className="col-md-7">
             <img style={{width:'100%'}} src={Frame} alt=""/>
                </div>
            </div>
        </div>
      </section>
    );
};

export default Header;