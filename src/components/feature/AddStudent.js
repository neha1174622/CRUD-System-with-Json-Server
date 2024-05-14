import React, { useEffect, useState } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import * as YUP from 'yup'
import API_URL from '../../util/API_URL'
import {useNavigate, useParams} from 'react-router-dom'



let addFrmSchema = YUP.object({
    name : YUP.string().required("Insert Full Name"),
    fee : YUP.string().required("Insert Fee"),
    gender : YUP.string().required("Select Gender"),
    address : YUP.string().required("Insert Address"),
})

const AddStudent = () => {
    let navigate = useNavigate();
    let param = useParams();


    let [stu, setStu] = useState({
        name : "",
            fee : "",
            gender : "",
            address : ""
    })

    let addFrm = useFormik({
        validationSchema : addFrmSchema,
        enableReinitialize : true,
        initialValues : stu,
        onSubmit : async (formdata)=>{
            if(param.id){
                let result = await axios.put(`${API_URL}/${param.id}`, formdata);
                navigate("/student")
            }else{

                let result = await axios.post(`${API_URL}`, formdata);
                navigate("/student")
            }
        }
    })

    useEffect(()=>{
        if(param.id){
            getData();
        }
    },[])
    let getData = async()=>{
        let result = await axios.get(`${API_URL}/${param.id}`);
        setStu(result.data);
    }


  return (
    <div className="row">
        <div className="col-md-6 offset-md-3 my-4">
            <form onSubmit={addFrm.handleSubmit}>
            <h4>{param.id ? 'Update' : "Add"} Student</h4>
            <div className='my-2'>
                <label>Name</label>
                <input type='text' value={addFrm.values.name} name='name' onChange={addFrm.handleChange} className={'form-control '+(addFrm.errors.name && addFrm.touched.name ? 'is-invalid' : '')} />
                {
                    addFrm.errors.name && addFrm.touched.name ? <small className='text-danger'>{addFrm.errors.name}</small> : ''
                }
                
            </div>
            <div className='my-2'>
                <label>Fee</label>
                <input type='text' value={addFrm.values.fee} name='fee' onChange={addFrm.handleChange} className={'form-control '+(addFrm.errors.fee && addFrm.touched.fee ? 'is-invalid' : '')} />
                {
                    addFrm.errors.fee && addFrm.touched.fee ? <small className='text-danger'>{addFrm.errors.fee}</small> : ''
                }

            </div>
            <div className='my-2'>
                <label>Gender</label>
                <br />
                Male<input type='radio' checked={addFrm.values.gender=="male"} name='gender' onChange={addFrm.handleChange} value="male" />
                Female<input type='radio' checked={addFrm.values.gender=="female"} name='gender' onChange={addFrm.handleChange}  value="female"/>
                <br />
                {
                    addFrm.errors.gender && addFrm.touched.gender ? <small className='text-danger'>{addFrm.errors.gender}</small> : ''
                }
            </div>
            <div className='my-2'>
                <label>Address</label>
                <textarea value={addFrm.values.address} className={'form-control '+(addFrm.errors.address && addFrm.touched.address ? 'is-invalid' : '')} name='address' onChange={addFrm.handleChange} ></textarea>
                {
                    addFrm.errors.address && addFrm.touched.address ? <small className='text-danger'>{addFrm.errors.address}</small> : ''
                }
            </div>
            <br />
            <button type='submit' className='btn btn-success'>{param.id ? 'Update' : 'Add'}</button>
            </form>
        </div>
    </div>
  )
}

export default AddStudent


