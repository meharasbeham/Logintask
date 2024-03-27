import React from 'react'
// import axios from 'axios'
import {Link} from 'react-router-dom'
export default function login() {
  return (
    <div className='cord2'>

<span>Create Account</span>
<p>
  <label type='username' className='name'>User Name:</label>
  <input type='username' required placeholder='enter your name' size={25}></input>
</p>
<p>
  <label type='email' className='email'>Email:</label>
  <input type='email' required placeholder='enter your email' size={25}></input>
</p>
<p>
  <label type='password' className='pass'>Password:</label>
  <input type='password' required placeholder='enter your passsword'></input>
</p>

<p>
{/* <button onClick={async()=>{
  const data=axios.post("http://localhost:4000/User/Create" ,{UserName:"",Email:"",Password:""})
}}>Create</button> */}
</p>
<p>
<Link to={"/"}>Back to login</Link>
</p>


    </div>
  )
}
