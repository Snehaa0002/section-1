import React from 'react';
import Link from 'next/link';
import{IconLogin} from '@tabler/icons-react';

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
        <button className='btn btn-primary'><IconLogin  size ={20} stroke={1}color={'red'}/> Lets Check</button>
       
    </div>
  )
}

export default  Home;
