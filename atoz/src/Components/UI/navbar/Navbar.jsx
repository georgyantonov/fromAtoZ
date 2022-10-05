import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context'
import MyButton from '../button/MyButton'

export const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }

  return (
    <nav className='navbar'>
      <div className="navbar__items">
        <Link to="/about" className='nav__item'>О нас</Link>
        <Link to="/posts" className='nav__item'>Посты</Link>
      </div>
      {isAuth 
        ?   <MyButton onClick={logout} >Выйти</MyButton>
        :   <MyButton><Link  to='/login'>Войти</Link></MyButton>
      }
      
    </nav>
  )
}
