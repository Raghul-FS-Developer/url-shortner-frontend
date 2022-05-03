import React,{useEffect, useState} from 'react'
import '../App.css' 
import URL from '../db'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
function UrlShortner({myStorage}) {

const navigate = useNavigate()
const[user, setUser]=useState(myStorage.getItem('user'))
const[newuser,setNewuser]=useState([])
useEffect(()=>{
   if(user === null){
  navigate('/')
   }
   getuser()
 },[])

 let getuser = async()=>{
  let res = await axios.post(`${URL}getuser`,{email:user})
 setNewuser(res.data.name)
 }

let email = myStorage.getItem('user')

const[longUrl ,setLongUrl]=useState()
const handleSubmit=async(e)=>{
  e.preventDefault()
  const res =await axios.post(`${URL}shortner`,{longUrl:longUrl})
  
  if(res.data.statuscode === 200){
   const res1 = await axios.post(`${URL}save`,{longurl:longUrl ,shorturl:res.data.url,email:email})
   if(res1.data.statuscode === 200){
     navigate('/summary')
   }
  }
} 
 return (
      <>
     <div className='mains'><h1 className='create display-1 text-info'>Create ShortUrl</h1><div className='user  p-2'><strong className='text-success'>user</strong><br/><h2 className='ft'>{newuser}</h2></div></div>
    <div className="card p-4 m-3 short">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="longUrl" className="form-label">
            LongUrl
          </label>
          <input
            id="longUrl"
            type="url"
            className="form-control"
            placeholder="type your long url here"
            
            onChange={(e) => {
              setLongUrl(e.target.value);
            }}
          />
           </div>

        <button className="btn btn-outline-success" type='submit'>Create Short Url</button>
      </form>
    </div>
    </>
  )
}

export default UrlShortner