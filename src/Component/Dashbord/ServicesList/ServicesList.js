import React from 'react';
import Sidebar from '../../CustomerPlace/Sidebar/Sidebar';
import AdminServiceList from '../AdminServicesList/AdminServicesList';


const ServicesList = () => {
    return (
        <div className='container'>
            <div className="row">
               <div className="col-md-2">
                 <Sidebar></Sidebar>
               </div>
               <div className="col-md-10">
                <AdminServiceList></AdminServiceList>
               </div>
            </div>
        </div>
    );
};

export default ServicesList;