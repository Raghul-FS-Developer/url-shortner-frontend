import axios from 'axios'
import React ,{useState} from 'react'

import '../App.css' 
import URL from '../db'
function Forgot() {
 
  const[email,setEmail]=useState('')
  const[msg ,setMsg] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
     let res = await axios.post(`${URL}forgot-password`,{email:email})
     
     if(res.data.statuscode === 200){
       alert('check your mail for password reset link')
     }else{
       setMsg(res.data.message)
     }
  }


  return (
    <>
    
     <div className="details">
     
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

export default Forgot