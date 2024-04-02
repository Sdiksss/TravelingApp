import React from 'react'
import { Link } from 'react-router-dom'
import "../shared/styles/HeaderShared.css"
const HeaderShared = () => {
  return (
    <header className='header__shared'>
        <h1><Link to= "/" className='header__shared-h1'>TravelingApp</Link></h1>
        <nav className='header__shared-nav'>
            <ul className='header__shared-ul' >  
                <li className='header__shared-li-left'><Link className='header__shared-li-left-text' to="/reservations">Reservation</Link></li>
                <li className='header__shared-li-right'>
                  <li ><Link className='header__shared-li-r-text ' to="/register">Register</Link></li>
                  <li ><Link className='header__shared-li-r-text ' to="/login">Login</Link></li>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared
