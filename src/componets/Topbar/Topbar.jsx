import React from 'react';
import './topbar.css'
import {Routes,Route, Link} from 'react-router-dom';

function Topbar() {
  const user = true;
  return (
    <div className='top'>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook"></i>
        <i className="topIcon fab fa-pinterest-square"></i> 
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-instagram"></i>
        
        </div>
        <div className="topCenter">
            <ul>
                <li className='topListItem'><Link to='/' className='link'>HOME</Link></li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'><Link to='/write' className='link'>WRITE</Link></li>
          {user && <li className="topListItem">LOGOUT</li>}

            </ul>
        </div>
        <div className="topRight">
        {
          user ? (
            <Link to='/setting'>
            <img className='profileImg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="topimg" />

            </Link>
            
          ):( 
          <ul>
            <li className='topListItem'><Link to='/login' className='link'>LOGIN</Link></li>
            <li className='topListItem'><Link to='/register' className='link'>REGISTER</Link></li>

            </ul>
       )
        }
            <i className="topSearchIcon fas fa-search"></i>

        </div>
    </div>
  )
}

export default Topbar;
