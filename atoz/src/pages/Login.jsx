import React from 'react'
import MyButton from '../Components/UI/button/MyButton';
import { MyInput } from './../Components/UI/input/MyInput';

export const Login = () => {
  return (
    <div>
        <h1>Авторизация</h1>
        <form>
            <MyInput type="text" name='login' placeholder='Введите логин'/>
            <MyInput type="password" name='password' placeholder='Введите пароль'/>
            <MyButton>Войти</MyButton>
        </form>
    </div>
  )
}