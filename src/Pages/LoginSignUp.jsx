import React from 'react'
import "../Pages/CSS/LoginSignUp.css"

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        <h1>Sign Up</h1>
        <div className='loginsignup-fields'>
          <input type="text" placeholder='Your Name' />
          <input type='email' placeholder='Your Email Id' />
          <input type='password' placeholder='Password' />
        </div>
        <div className='loginsignup-agree'>
          <input type='checkbox' name='' id='' />
          <p> By Continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        <button> Continue </button>
        <p className='loginsignup-login'>Already have an account? <span>Login here</span></p>
      </div>
    </div>
  )
}

export default LoginSignUp
