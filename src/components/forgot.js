import axios from 'axios'
import React ,{useState} from 'react'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../App.css' 
import URL from '../db'
function Forgot() {
 
  const[email,setEmail]=useState('')


  const handleSubmit=async(e)=>{
    e.preventDefault()
    const id = toast.loading('Please wait...')
     let res = await axios.post(`${URL}forgot-password`,{email:email})
     
     if(res.data.statuscode === 200){
       
       toast.update(id,{render:'check your mail for password reset link',type:'success',isLoading:false,autoClose:true,closeButton:true})
      }else{
       toast.update(id,{render:res.data.message,type:'error',isLoading:false,autoClose:true,closeButton:true})

     }
  }


  return (
    <>
    
     <div className="details">
     <ToastContainer/>
    <div className="card-body">
      
              <div className="text-center">
                <h3 className="display-5">Forgot Password?</h3>
                <p>Please Provide Your Registered Email</p>
              </div>
               <div className="p-3">
                <form onSubmit={handleSubmit}>
            
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id='email'
                      placeholder='Enter your Email'
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
        
                  <div className="">
                    <button
                      className="btn btn-success btn-lg"
                      
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form> 
                 </div> 
                </div>
                </div>
                
                </>
  )
}

export default Forgot