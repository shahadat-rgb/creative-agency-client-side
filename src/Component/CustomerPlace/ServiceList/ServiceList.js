import React from 'react';
import AllServiceList from '../AllServiceList/AllServiceList';
import NavbarLeft from '../NavbarLeft/NavbarLeft';


const ServiceList = () => {
    return (
        <div className='container'>
            <div className="row">
             <div className="col-md-2">
               <NavbarLeft></NavbarLeft>
                </div>
                <div className="col-md-10">
                  <AllServiceList></AllServiceList>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;