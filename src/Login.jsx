import React from 'react'
import Inp from './Inp'
import Btn from './Btn'
import './Login.css'
function Login() {
  return (
    <div className='lgBox'>
        <h2>Login</h2>
<Inp name={"Username"}type={"text"}/>
<Inp name={"Password"}type={"password"}/>
<Btn name={"Login"}></Btn>
    </div>
  )
}

export default Login        