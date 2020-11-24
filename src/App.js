import './App.css';
import Home from './Component/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './Component/Login/Login';
import { createContext, useState } from 'react';
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
          <PrivateRoute path='/customerPlaceDashbord/order'>
               <Order></Order>
          </PrivateRoute>
          <Route path='/customerPlaceDashbord/service-list'>
               <ServiceList></ServiceList>
          </Route>
          <Route path='/customerPlaceDashbord/review'>
               <Review></Review>
          </Route>
          <Route path='/adminPlaceDashbord/services-list'>
               <ServicesList></ServicesList>
          </Route>
          <Route path='/adminPlaceDashbord/add-service'>
                  <AddService></AddService>
          </Route>
          <Route path='/adminPlaceDashbord/make-admin'>
                  <MakeAdmin></MakeAdmin>
          </Route>

        </Switch>
    </Router>
</UserContext.Provider>
  );
}

export default App;
