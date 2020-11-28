import  React, { useContext,} from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
    return (
       <div className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
          <img style={{height:'50px'}} src={logo} />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
                  <a class="nav-link mr-5" href="#">Home</a>
            </li>
            <li class="nav-item">
               <a class="nav-link mr-5" href="#">Our Protfulio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-5" href="#">Our Team</a>
            </li>
                      {
                            loggedInUser.user? <Link to='/dashboard/service-list' className='link my-navlink'><span> Dashboard</span></Link>
                            :<Link to='/login' className='link'><Button style={{padding:'4px 20px'}} className='btn-dark btn-sm'>Login</Button></Link>
                        
                      }
          </ul>
        </div>
      </nav>
       </div>
    );
};

export default Navbar;