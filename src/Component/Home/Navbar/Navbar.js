import  React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png'
import './Navbar.css'
const Navbar = () => {
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

            <li class="nav-item">
                  <Link  to="/adminPlaceDashbord/services-list" class="nav-link mr-5">Dashbord </Link>
            </li>
          
            <Link to='/login'><button className='login-btn'> login</button></Link>
          </ul>
        </div>
      </nav>
       </div>
    );
};

export default Navbar;