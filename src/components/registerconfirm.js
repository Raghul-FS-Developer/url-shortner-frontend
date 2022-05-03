import axios from "axios";
import React,{useEffect, useState} from "react";

import { useParams,useNavigate } from "react-router-dom";
import URL from "../db";

function RegisterConfirm() {
    useEffect(()=>{
        getdata()
       },[])
       
    const[work,setWork]=useState(true)
    
    let navigate=useNavigate()
    let params = useParams();


 


let getdata=async()=>{
   
  let res =await axios.post(`${URL}confirm/${params.token}`);
  
  if (res.data.statuscode === 200) 
  {
  setWork(true)
}else{
    setWork(false)
}
}




  return(
      <>
     {
         work === true?
         <>
      <h2 style={{display:"flex",justifyContent:"center", color:"green"}}>
       Account verified successfullly     
      </h2>
      <a style={{display:"flex",justifyContent:"center", color:"red"}} onClick={()=>navigate("/signin")}>Click to login page</a></>:
      <><h2 style={{display:"flex",justifyContent:"center", color:"red"}}>
        Token Expired
      </h2><a style={{display:"flex",justifyContent:"center", color:"green"}} onClick={()=>navigate("/signin")}>Click to login page</a>
      </>
      
}
     
      
      </>
  ) 
  
  }

export default RegisterConfirm;
