import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import '../App.css'

function Navigation({logged ,setLogged ,myStorage}) {
   

  let navigate = useNavigate()

  const logout = ()=>{
    setLogged(null)
    myStorage.removeItem('user')
    navigate('/')

  }
  
  return (
    <>
    <nav class="navbar navbar-light bg-white justify-content-between boxs">
    
    <a style={{paddingLeft:'40px' ,paddingTop:'20px' ,cursor:'pointer'}} class="navbar-brand text-success" onClick={()=>navigate('/')}>UrlShortner</a>
    
    <div>
    
    {logged === null ?
    <Link to='/signin' style={{textDecoration:'none'}}>
    <a style={{paddingRight:'20px' }} ><small className='bs'> SignIn</small></a></Link>:
    <Link to='/url' style={{textDecoration:'none'}}>
    <a style={{paddingRight:'20px'}} ><small className='bs'> CreateURL</small></a></Link>
    }
       
    {logged === null ?
    <Link to = '/signup' style={{textDecoration:'none'}}>
    <a style={{paddingRight:'20px'}}><small className='bs'>SignUp</small></a></Link>:
    <Link to='/summary' style={{textDecoration:'none'}}>
    <a style={{paddingRight:'20px'}}><small className='bs'> Summary</small></a></Link>}
  
    {logged === null ?
    <Link to= '/forgot' style={{textDecoration:'none'}}>
    <a style={{paddingRight:'20px'}}><small className='bs'>ForgotPassword</small></a></Link>:
    <button style={{marginRight:'20px' }} className='btn btn-outline-danger' onClick={logout}>Logout</button>}
    </div>
  </nav>
  </>
  )
}

export default Navigation