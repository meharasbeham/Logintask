import React from 'react'
// import axios from 'axios'
import {Link}from 'react-router-dom'


export default function login() {
  return (
    <div className='cord'>
      <span>Login</span>
<p>
  <label type='email' className='email'>Email:</label>
  <input type='email' required placeholder='enter your email' size={25}></input>
</p>
<p>
  <label type='password' className='pass'>Password:</label>
  <input type='password' required placeholder='enter your passsword'></input>
</p>
<p>
<Link to={"/forgot"}>forgot password</Link>
</p>
<p>
{/* <button onClick={async()=>{
  const data=axios.post("http://localhost:4000/User/singin" ,{Email:"",Password:""})
}}>Login</button> */}
</p>

<p>
<Link to={"/create"}>New Account create</Link>
</p>
<p>
<Link to={"/create"}>Login</Link>
</p>
 </div>
 )
}
