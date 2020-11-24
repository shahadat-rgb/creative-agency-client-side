import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
const NavbarLeftTwo = () => {
    return (
        <div className='navbar-left-design'>
        <div className='pt-4 pb-5'>
            <Link to='/'>
                <img style={{height:'50px'}} src={logo} alt=""/>
            </Link>
        </div>
        <div>
            {
                ['Services list','Add Service', 'Make Admin'].map((item,index)=>{
                    return(
                    <Link style={{color:`${window.location.pathname==='/adminPlaceDashbord/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                         to={`/adminPlaceDashbord/${item.toLowerCase().split(' ').join('-')}`}>
                        <div className='d-flex ml-3'>
                        {index===0 && <LocalMallOutlinedIcon></LocalMallOutlinedIcon>}
                        {index===1 && <AddOutlinedIcon></AddOutlinedIcon>}
                        {index===2 && <PersonAddOutlinedIcon></PersonAddOutlinedIcon>}
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

export default NavbarLeftTwo;