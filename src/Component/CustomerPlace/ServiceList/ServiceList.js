import React from 'react';
import AllServiceList from '../AllServiceList/AllServiceList';
import Sidebar from '../Sidebar/Sidebar';



const ServiceList = () => {

    return (
        <div className='container'>
            <div className="row">
             <div className="col-md-2">
               <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                  <AllServiceList></AllServiceList>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;