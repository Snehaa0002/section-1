import React from 'react'
import classes from './login.module.css';
import vercelIcon from './vercel.svg';



const Login = () => {
  return (
    <div>
        <h1> Login</h1>
        <button>Login Button</button>
        <button className={classes.loginBtn} Login Button/button>
        </div>
  )
}

export default Login;