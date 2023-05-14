import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className='Login'>
        <form className='form'>
            

           <label>
                Email:
                <input type='text' placeholder='Email'/>
            </label>
            <label>
                Password:
                <input type='text' placeholder='Password'/>
            </label>
            <button type='submit'>Login</button>
            
        </form>
    </div>
  )
}

export default Login