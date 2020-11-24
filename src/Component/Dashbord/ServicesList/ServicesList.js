import React from 'react';
import AdminServiceList from '../AdminServicesList/AdminServicesList';

import NavbarLeftTwo from '../NavbarLeftTwo/NavbarLeftTwo';

const ServicesList = () => {
    return (
        <div className='container'>
            <div className="row">
               <div className="col-md-2">
                <NavbarLeftTwo></NavbarLeftTwo>
               </div>
               <div className="col-md-10">
                <AdminServiceList></AdminServiceList>
               </div>
            </div>
        </div>
    );
};

export default ServicesList;