import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavbarLeftTwo from '../NavbarLeftTwo/NavbarLeftTwo';

const AddService = () => {
    const [addService, setAddService] = useState(null);
    const [file, setFile] = useState(null);
    const history =useHistory();

    const handleBlur = e => {
        const newAddService = {...addService };
        newAddService[e.target.name] = e.target.value;
        console.log(newAddService);
        setAddService(newAddService);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file',file);
        formData.append('title', addService.title);
        formData.append('Description', addService.Description);

        fetch('http://localhost:4000/addService', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
             if (data) {
                alert("addService conferm successfully");
                 history.push('/')
             }
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='container'>
             <div className="row">
                 <div className="col-md-2">
                <NavbarLeftTwo></NavbarLeftTwo>
                 </div>
                 <div className="col-md-10">
                <h4 className='ml-5 mt-4 mb-5'>Add Service</h4>
                 
                 <form onSubmit={handleSubmit} style={{ backgroundColor:'rgba(236, 227, 227, 0.329)',height:'100vh'}}>
                    
                     <div className="form-group">
                        <label htmlFor="exampleInputEmail1" className='ml-5 mt-3'>Service Title</label>
                        <input style={{border:'1px solid lightgray'}} onBlur={handleBlur} type="text" className="form-control input-value ml-5 " name="title" placeholder="Enter Title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='ml-5'>Description</label>
                        <input style={{border:'1px solid lightgray'}} onBlur={handleBlur} type="text" className="form-control input-type ml-5" name="Description" placeholder=" Enter Description" />
                    </div>  
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1" className='ml-5'></label>
                        <input onChange={handleFileChange} type="file"  id="exampleInputPassword1" placeholder="Picture" />
                    </div>
                    <button type="submit" style={{border:'none',borderRadius:'8px',marginLeft:'50px',backgroundColor:'green',color:'white',padding:'8px 23px 8px 23px' }}>Submit</button>
                </form>
                 </div>
                
             </div>
        </div>
    );
};

export default AddService;