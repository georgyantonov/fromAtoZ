import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar'>
    <div className="navbar__items">
      <Link to="/about" className='nav__item'>О нас</Link>
      <Link to="/posts" className='nav__item'>Посты</Link>
    </div>
  </nav>
  )
}
