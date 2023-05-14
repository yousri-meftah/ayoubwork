import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './SignUp.css'
const SignUp = () => {
    const navigate=useNavigate()
    const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  const submitHandler= async (e)=>{
    e.preventDefault()
    try{
   await fetch("http://localhost:5000/signup/",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({userName,email,password})        
    }).then((response)=>{
            response.json().then((data)=>{
                const token=data.token
                localStorage.setItem('token',token)
            })
    })}catch(err){
        console.log(err)
    }
    

  }
  return (
    <div className='SignUp'>
        <form className='form' onSubmit={submitHandler}>
            <label>
                Username:
                <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
            </label>

           <label>
                Email:
                <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                Password:
                <input taype='text' placeholder='Password'onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default SignUp