import React from 'react'
import { useContext } from 'react';
import MyButton from '../Components/UI/button/MyButton';
import { AuthContext } from '../context';
import { MyInput } from './../Components/UI/input/MyInput';

export const Login = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const login = e => {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true')
  }

  return (
    <div>
        <h1>Авторизация</h1>
        <form
          onSubmit={login}
        >
            <MyInput type="text" name='login' placeholder='Введите логин'/>
            <MyInput type="password" name='password' placeholder='Введите пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}