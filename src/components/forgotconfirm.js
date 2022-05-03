import axios from 'axios'
import React, { useState} from 'react'
import { useParams } from 'react-router-dom'
import URL from '../db'
import { useNavigate } from 'react-router-dom'

function ForgotConfirm() {
const navigate=useNavigate()
const params=useParams()

 const[msg,setMsg]=useState("")
const[password,setPassword]=useState("")
const[confirmpassword,setConfirmpassword]=useState("")

 let handleSubmit=async(e)=>{
   e.preventDefault()
    
    if(password === confirmpassword){
        
       let res = await axios.post(`${URL}verify/${params.token}`,{
       password:password})


    if(res.data.statuscode==200){
      
     navigate("/signin")
     alert("password changed successfully")
    
    }else{
        setMsg(res.data.message)
    }
}else{
     setMsg("Password Doesn't Match")
    }
}

  return (
    <>
   <div className="details">
     
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
                   <p className='text-danger'>{msg}</p>
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