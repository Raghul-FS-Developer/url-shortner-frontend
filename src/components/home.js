import React  from 'react'
import { useNavigate} from 'react-router-dom'
import '../App.css';

function Home() {

const navigate = useNavigate()
   
  return (
    <div>
    
    <div
      className="card my-3 mb-5 m-md-5 p-5 shadow  border-dark cards"
      id="homePage"
    >
     <div className='img'>
      <div className="p-5 col">
        <div className="lead display-1">Welcome To UrlShortner</div>
      </div>
      <div className="p-5 display-6 text-danger col">
        <p>Here You Can Create ShortUrl For A LongUrl</p>
      </div>
    </div>
    </div>
    <div className="container-fluid bg-dark p-5">
      <div className="container p-5 d-flex justify-content-center align-items-center">
      <button className="btn btn-outline-warning col-6 p-2" onClick={()=>navigate('/signup')}>Get started</button>
      </div>
    </div>
  </div>
  )
}

export default Home