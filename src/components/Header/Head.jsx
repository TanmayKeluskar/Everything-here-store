import React from 'react'
import './Reset.css'
import './Head.css'
import logo from './TKmerch.png'
import { Link } from "react-router-dom";

function Head() {
  return (
    <header>
      <div className="logo"><Link to='/'><img src={logo} alt="Logo" /></Link></div>
      <nav className="header-nav">
        <Link to='/products' className='header-nav-items'>Products</Link>
        <Link to='/blogs' className='header-nav-items'>Blogs</Link>
        <Link to='/about' className='header-nav-items'>Us</Link>
      </nav>
    </header>
  )
}

export default Head