import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Component/Login/Login';
import { createContext, useEffect, useState } from 'react';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Order from './Component/CustomerPlace/Order/Order';
import ServiceList from './Component/CustomerPlace/ServiceList/ServiceList';
import Review from './Component/CustomerPlace/Review/Review';
import ServicesList from './Component/Dashbord/ServicesList/ServicesList';
import AddService from './Component/Dashbord/AddService/AddService';
import MakeAdmin from './Component/Dashbord/MakeAdmin/MakeAdmin';


export const UserContext=createContext();
function App() {
  const [loggedInUser,setLoggedInUser] =useState({})


  useEffect(()=>{
    //get token and fetch user info
  const sessionData=sessionStorage.getItem('token')
  const token=JSON.parse(sessionData)
  token && fetch('https://creative-agency-fullstack.herokuapp.com',{
    method:'GET',
    headers:{ 
      'Content-Type':'application/json',
      token:token
    }
  })
  .then(res=>res.json())
  .then(result=>{
    setLoggedInUser({...loggedInUser,user:{name:result.name, email:result.email, img:result.picture}})
  })
  },[])

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}> 
    <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute exact path='/customerPlaceDashbord/order'>
               <Order></Order>
          </PrivateRoute>
          <PrivateRoute exact path='/customerPlaceDashbord/service-list'>
               <ServiceList></ServiceList>
          </PrivateRoute>
          <PrivateRoute exact path='/customerPlaceDashbord/review'>
               <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path='/adminPlaceDashbord/services-list'>
               <ServicesList></ServicesList>
          </PrivateRoute>
          <PrivateRoute exact path='/adminPlaceDashbord/add-service'>
                  <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path='/adminPlaceDashbord/make-admin'>
                  <MakeAdmin></MakeAdmin>
          </PrivateRoute>

        </Switch>
    </Router>
</UserContext.Provider>
  );
}

export default App;
