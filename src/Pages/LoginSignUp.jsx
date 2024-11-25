// import React from 'react'
// import './LoginSignUp.css'

// export const LoginSignUp = () => {
//   return (
//     <div className='loginsignup'>
//       <div className="container">
//         <h1>Sign Up</h1>
//         <div className="fields">
//           <input type='text'placeholder='Your Name'/>
//           <input type='email'placeholder='Your Email'/>
//           <input type='password'placeholder='Enter your password'/>

//         </div>
//         <button>Continue</button>
//         <p className="login">Already have an account?<span>Log In</span></p>
//         <div className="agree">
//         <input type='checkbox' name='' id=''/>
//         <p>By Continuing,I agree to the terms and Conditions</p>
//         </div>
//       </div>
//     </div>
//   )
// }
import React, { useState } from 'react';
import './LoginSignUp.css';

export const LoginSignUp = () => {
  const [isLogin, setIsLogin] = useState(false); // Toggle between login and signup

  return (
    <div className='loginsignup'>
      <div className="container">
        <h1>{isLogin ? 'Log In' : 'Sign Up'}</h1>

        <div className="fields">
          {!isLogin && (
            <input type='text' placeholder='Your Name' />
          )}
          <input type='email' placeholder='Your Email' />
          <input type='password' placeholder={isLogin ? 'Enter your password' : 'Create a password'} />
        </div>

        <button className='btn'>{isLogin ? 'Log In' : 'Continue'}</button>

        <p className="toggle">
          {isLogin ? (
            <>
              Don't have an account? <span className='span' onClick={() => setIsLogin(false)}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account? <span className='span' onClick={() => setIsLogin(true)}>Log In</span>
            </>
          )}
        </p>

        {!isLogin && (
          <div className="agree">
            <input type='checkbox' id='terms' />
            <label htmlFor='terms'>By continuing, I agree to the Terms and Conditions</label>
          </div>
        )}
      </div>
    </div>
  );
};

