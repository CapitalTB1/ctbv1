import React from 'react';
import videoBg from '../assets/videoBg.mp4';
import './Main.css';
import Nav from './Nav';

const Main = () => {
  return (
    <div className='main'>
        <div className="overlay"></div>
          <video src={videoBg} autoPlay loop muted />
        <div className="content">

            <h1>Capital Trade Bot</h1>

        </div>


        <Nav/>
        
        




    </div>
  )
}

export default Main;