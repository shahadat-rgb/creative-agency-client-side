import React from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import logo from '../../../images/logos/logo.png'
import {Link } from "react-router-dom";
import './NavbarLeft.css'
const NavbarLeft = () => {
    
    return (
        <div className='navbar-left-design'>
            <div className='pt-4 pb-5'>
                <Link to='/'>
                    <img style={{height:'50px'}} src={logo} alt=""/>
                </Link>
                 
            </div>
            <div>
                {
                    ['Order', 'Service list', 'Review'].map((item,index)=>{
                        return(
                        <Link style={{color:`${window.location.pathname==='/customerPlaceDashbord/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                             to={`/customerPlaceDashbord/${item.toLowerCase().split(' ').join('-')}`}>
                            <div className='d-flex ml-3'>
                            {index===0 && <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>}
                            {index===1 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                            {index===2 && <SmsOutlinedIcon></SmsOutlinedIcon>}
                            <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>{item}</p>

                         </div>
                        </Link>
                          
                        )
                    })
                }
            </div>
        </div>
    );
};

export default NavbarLeft;