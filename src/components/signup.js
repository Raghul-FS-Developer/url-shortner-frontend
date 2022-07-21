import React ,{useState} from 'react'
import axios from 'axios'
import '../App.css' 
import URL from '../db'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function Signup() {
 
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setpassword]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const id = toast.loading("Please wait...")
  let res = await axios.post(`${URL}register`,{name:name,email:email,password:password})


  if(res.data.statuscode === 200){
 
    toast.update(id,{render:'Check your mail for verification link',type:'success',isLoading:false,autoClose:true,closeButton:true})
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
                <h3 className="display-2">SignUp</h3>
              </div>
               <div className="p-3">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      type="text"
                      id='name'
                      placeholder='Enter your name'
                      onChange={(e)=>setName(e.target.value)}
                      required
                    />
                    
                       </div>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      type="email"
                      id='email'
                      placeholder='Enter your email'
                      onChange={(e)=>setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3 ">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="form-control"
                      type="password"
                      id='password'
                      placeholder='Enter your password'
                      onChange={(e)=>setpassword(e.target.value)}
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

export default Signup