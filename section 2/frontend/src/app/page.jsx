import React from 'react'

const Home = () => {
  return (
    <div>
        <h1 style={{textAlign: 'center',fontsize:50}}>Welcome to Homepage</h1>

        <img src="/next.svg" alt="" />
        <hr /><br /><input type="text" />
        <button className='mybtn'>My Button</button>
        <button className='loginbtn'>Lets Check</button>
    </div>
  )
}

export default  Home;
