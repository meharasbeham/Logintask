import React from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
export default function login() {
  return (
    <div className='cord1'>
      <span>Forgot password</span>
<p>
  <label type='email' className='forgot'>Email:</label>
  <input type='email' required placeholder='enter your email' size={25}></input>
</p>
{/* <p><button onClick={async()=>{
  const data=axios.post("http://localhost:4000/User/Create" ,{Email:""})
}}>Submit</button></p> */}

<Link to={"/"}>Submit</Link>

    </div>
  )
}
