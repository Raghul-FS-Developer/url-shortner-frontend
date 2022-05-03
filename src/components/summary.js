import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import URL from '../db'

function Summary({myStorage}) {
  const navigate = useNavigate()
  const[user, setUser]=useState(myStorage.getItem('user'))
  const[data ,setData] = useState([])
  useEffect(()=>{
    if(!user){
  navigate('/')
    }
    getData()
  },[])
  

  let email = myStorage.getItem('user')
const getData =async()=>{
  const res =await axios.post(`${URL}geturl`,{email:email})
 setData(res.data)
}
  return (
    <>
    <h1 className='table display-2 text-info'>Table Summary</h1>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">OriginalUrl</th>
                <th scope="col">ShortUrl</th>
                <th scope="col">CreatedAt</th>
               
              </tr>
            </thead>
            <tbody >
              {data.map((e, i) => (
                <tr 
                key={i}
                >
                  <th scope="row">
                      
                      {i + 1}
                      </th>
                  <td className='use'>
                      
                      {e.longurl}
                  </td>
                  <td className='use2'>
                   
                    {e.shorturl}
                  </td>
                  <td>
                      
                      {new Date(e.createdAt).toLocaleDateString()}
                      </td>
                  
                </tr>
               ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </>
  )
}

export default Summary