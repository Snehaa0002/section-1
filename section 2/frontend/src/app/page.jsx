import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <div>
     
     <Link href ="/login">Login Page</Link>
     <a href ="/signup">Sign Page</a>
     <a href ="/contact">ContactPage</a>

        <h1 style={{textAlign: 'center',fontsize:50}}>Welcome to Homepage</h1>

        <img src="/next.svg" alt="" />
        <hr /><br /><input type="text" />
        
        <button className='mybtn'>My Button</button>
        <button className='loginbtn'>Lets Check</button>
    </div>
  )
}

export default  Home;
