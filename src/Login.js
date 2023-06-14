import React, { useState } from 'react'

const Login = () => {
const[Email,setEmail]=useState("")


  return (
    <div>
<input type="email"
value={Email} 
onChange={(e)=>setEmail(e.target.value)}
placeholder='enter email'
/>

    </div>
  )
}

export default Login