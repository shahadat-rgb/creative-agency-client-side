import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <section className="contact mt-5 pt-5 pl-5 pr-5 pb-1">
           <div className="container">
               <div className="row d-flex align-items-center">
                  <div className="col-md-6">
                       <h1>Let us handle your <br/> project, professionally. </h1>
                       <p className='mt-5'>with well written codes,we build amazing apps for all <br/>platforms mobile and web apps in general</p>
                  </div>  
               
               <div className='col-md-6'>
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="your Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="your company name"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="your Message"></textarea>
                       </div>
                       <div className="form-group">
                           <button type="button" className="login-btn"> Submit </button>
                       </div>
                   </form>
               </div>
             </div>
               <p className='text-center'>copyright by shahadat all right reserved 2020</p>
           </div>
          
       </section>
    );
};

export default Footer;