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
import AddService from './Component/Dashbord/AddService/AddService';
import MakeAdmin from './Component/Dashbord/MakeAdmin/MakeAdmin';
import ServiceList from './Component/Dashbord/ServiceList/ServiceList';
import Order from './Component/Dashbord/Order/Order';
import Review from './Component/Dashbord/Review/Review';
import NotFound from './Component/NotFound/NotFound';


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
          <PrivateRoute exact path='/dashbord/order'>
              <Order></Order>
          </PrivateRoute>
          <Route path='/dashbord/service-list'>
               <ServiceList></ServiceList>
          </Route>
          
          <Route  path='/dashbord/review'>
               <Review></Review>
          </Route>
        
          <Route path='/dashbord/add-service'>
                  <AddService></AddService>
          </Route>
          <Route exact path='/dashbord/make-admin'>
                  <MakeAdmin></MakeAdmin>
          </Route>
          <Route path='*'>
              <NotFound></NotFound>
          </Route>


        </Switch>
    </Router>
</UserContext.Provider>
  );
}

export default App;
