import React ,{useState} from 'react'
import URL from '../db'
import '../App.css' 
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function SignIn({myStorage ,setLogged}) {
 
  const Navigate = useNavigate()

  const[email,setEmail]=useState('')
  const[password,setpassword]=useState('')
  const[msg,setMsg]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault()
    let res = await axios.post(`${URL}login`,{email:email,password:password})
     
  if(res.data.statuscode === 200){
     
     myStorage.setItem('user',res.data.email)
     setLogged(true)
     Navigate('/url')
  }else{
    setMsg(res.data.message)
  } 
  
  }
    

  return (
    <>
    
     <div className="details">
     
    <div className="card-body">
      
              <div className="text-center">
                <h3 className="display-3">SignIn</h3>
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

export default SignIn