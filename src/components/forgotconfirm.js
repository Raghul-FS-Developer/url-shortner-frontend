import axios from 'axios'
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import URL from '../db'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function ForgotConfirm() {
const navigate=useNavigate()
const params=useParams()


const[password,setPassword]=useState("")
const[confirmpassword,setConfirmpassword]=useState("")

 let handleSubmit=async(e)=>{
   e.preventDefault()
   const id = toast.loading("Changing password...")
   if(password === confirmpassword){
        
       let res = await axios.post(`${URL}verify/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
      
      toast.update(id,{render:"password changed successfully",type:"success",isLoading:false,closeButton:true,autoClose:true})
      setTimeout(()=>navigate("/signin"),1000)
      
    }else{
      toast.update(id,{render:res.data.message,type:"error",isLoading:false,closeButton:true,autoClose:true})
      
    }
  }else{
  toast.update(id,{render:"Password Doesn't Match",type:"error",isLoading:false,closeButton:true,autoClose:true,delay:500})

    }
}

  return (
    <>
   <div className="details">
     <ToastContainer pauseOnFocusLoss={false} limit={3} autoClose={2000}/>
     <div className="card-body">
       
               <div className="text-center">
                 <h3 className="display-3">Reset Password</h3>
               </div>
                <div className="p-3">
                 <form onSubmit={handleSubmit}>
                 
                   <div className="mb-3 ">
                     <label className="form-label" htmlFor="newpassword">
                       NewPassword
                     </label>
                     <input
                       className="form-control"
                       type="password"
                       id='newpassword'
                       placeholder='Enter your New password'
                       onChange={(e)=>setPassword(e.target.value)}
                       required
                       minLength={8}
                       maxLength={14}
                     />
                   </div>
                   <div className="mb-3 ">
                     <label className="form-label" htmlFor="password">
                      ConfirmPassword
                     </label>
                     <input
                       className="form-control"
                       type="password"
                       id='password'
                       placeholder='Enter your Confirm password'
                       onChange={(e)=>setConfirmpassword(e.target.value)}
                       required
                       minLength={8}
                       maxLength={14}
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

export default ForgotConfirm