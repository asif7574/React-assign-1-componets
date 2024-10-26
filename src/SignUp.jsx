import React from 'react'
import Inp from './Inp'
import Btn from './Btn'
import'./SignUp.css'

function SignUp() {
  return (
    <div className='suBox'>
        <h2>SignUp</h2>
         <Inp name={"Username"}type={"text"}/>
<Inp name={"Password"}type={"password"}/>
<Inp name={"Confirm Password"}type={"password"}/>
<Btn name={"Signup"}></Btn>
        

    </div>
  )
}

export default SignUp