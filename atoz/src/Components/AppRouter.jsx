import React from 'react'
import {BrowserRouter, Route, Routes, Navigate, Outlet} from 'react-router-dom'
import { Navbar } from './UI/navbar/Navbar';
import { publicRoutes, privateRoutes } from './../router/Routes';
import Posts from '../pages/Posts';
import { Login } from '../pages/Login';



export const AppRouter = () => {
  const isAuth = true;

  const privateRoute = (isAuth) => {
    return isAuth ? <Outlet /> : <Route path='/posts'  errorElement={<Login />}/> 
  }
  return (
    <BrowserRouter>
        <Navbar />
        {isAuth 
          ? <Routes>
              {privateRoutes.map(route => 
                <Route
                  element={<route.element/>}
                  path={route.path}
              />
          )}
            <Route path='/login' element={isAuth ? <Navigate to='/posts' replace/> : <Navigate to='/login' replace/>} />
            </Routes>
          :
          <Routes>
            {publicRoutes.map(route => 
              <Route
                  element={<route.element/>}
                  path={route.path}
              />
            )}
              <Route path='*' element={isAuth ? <Navigate to='/posts' replace/> : <Navigate to='/login' replace/>} />
          </Routes>
          }
    </BrowserRouter>
  )
}
