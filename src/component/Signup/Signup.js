import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Signup.css';
import Proprietor from './svg/Frame.svg';
import ProprietorHover from './svg/property-white.svg';
import WanderedWhite from './svg/wander-white.svg';
import wanderer from  './svg/Frame (1).svg';
import { NavLink } from 'react-router-dom';

function  Signup() {
   const backgroundColor = '#003C40';

    return (
      <>
      <div className='signup-background'>
        <div className='signup-header-title'>
          <p className='text-xl text-black'>
            "Choose Your Adventure: Host a Haven or Seek Nature's Bliss – Your Journey Begins with a Click!"
          </p>
        </div>
        <div className='row main gap-10'>
          <div className="col-6">
            <NavLink  to="/proprty-register" className='property-class'>
              <img src={Proprietor} alt='proprietor' className='mt-4 first-image'/>
              <img src={ProprietorHover} alt='proprietorHover' className='mt-4 second-image'/>
               <p>Proprietor</p>
            </NavLink>
          </div>
          <div className="col-6">
            <NavLink to="/wander-register" className='property-class'>
              <img src={wanderer} alt='Wanderer' className='mt-4 wandered-frist'/>
              <img src={WanderedWhite} alt='Wanderer' className='mt-4 wandered-second'/>
              <p>Wanderer</p>
            </NavLink>
          </div>
        </div>
        <div className='signup-footer'>
          <p>© [2023] . travelintents All Rights Reserved.</p>
        </div>
      </div>
      <Navbar backgroundColor={backgroundColor}/>
      </>
    );
}

export default Signup;
    