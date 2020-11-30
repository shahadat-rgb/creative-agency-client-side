import React, { useContext } from 'react';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import logo from '../../../images/logos/logo.png'
import {Link, useHistory } from "react-router-dom";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import './Sidebar.css'
import { UserContext } from '../../../App';
const Sidebar= () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)

    const userService=['Order', 'Service list', 'Review']
    const adminService=['Service list', 'Add Service', 'Make Admin']
    const history=useHistory()

    const logoutHandler=()=>{
        setLoggedInUser({user:null})
        sessionStorage.removeItem('token')
        history.replace('/')
    }

 
    return (
        <div className='navbar-left-design'>
            <div className='pt-4 pb-5'>
                <Link to='/'>
                    <img style={{height:'50px'}} src={logo} alt=""/>
                </Link>
                 
              </div>
            <div>
        {
                  loggedInUser.admin && adminService.map((item,index)=>{
                    return(
                    <Link style={{color:`${window.location.pathname ==='/dashbord/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                        to={`/dashbord/${item.toLowerCase().split(' ').join('-')}`}>
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
{  
    
    !loggedInUser.admin && userService.map((item,index)=>{
        return(
                <Link style={{color:`${window.location.pathname==='/dashbord/'+item.toLowerCase().split(' ').join('-')?'#009444':'black'}`}}
                    to={`/dashbord/${item.toLowerCase().split(' ').join('-')}`}>
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

                <div onClick={logoutHandler} className='d-flex ml-3 logout' style={{cursor:'pointer'}}>
                    <ExitToAppIcon></ExitToAppIcon>
                    <p className='ml-1' style={{fontSize:'16px', fontWeight:'400'}}>Logout</p>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;