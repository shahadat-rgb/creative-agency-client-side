import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import google from '../../images/icons/google.png'
import logo from '../../images/logos/logo.png'
import "./Login.css"
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history  = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser)
            history.replace(from)
             console.log(signedInUser)

            // ...
          }).catch(function(error) {
            const errorMessage = error.message;
            console.log(errorMessage);
          });
    }
    return (
        <body className="container google-auth">
        <img style={{height:'60px',margin:'1px auto',display:'block'}} src={logo} alt=""/> 
         <div className="row justify-content-center">

             <div className="col-12 col-sm-6 col-md-7">
          <div className=" container google-login-aria">
                   <h1 style={{textAlign:'center',marginTop:'20px'}}>Login aria</h1>

              <div onClick={handleGoogleSignIn} className="google-loggedIn">
                <img style={{height:'40px',marginRight:'50px'}} src={google} alt=""/>
                <h4> Continue with google </h4>
                   
              </div>
              <div style={{textAlign:'center'}}>
              <span>Dont have an account ?</span>  <span style={{color:'blue',paddingLeft:'5px'}}> <u>create an account</u> </span>
              </div>
          </div>
             </div>
         </div>
        </body>
    );
};

export default Login;