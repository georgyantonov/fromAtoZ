import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { Navbar } from './UI/navbar/Navbar';
import { publicRoutes, privateRoutes } from './../router/Routes';
import { useContext } from 'react';
import { AuthContext } from '../context';

export const AppRouter = (props) => {
  const {isAuth} = useContext(AuthContext)
  return (
    <BrowserRouter>
        <Navbar />
        {isAuth 
          ? <Routes>
              {privateRoutes.map(route => 
                <Route
                  element={<route.element/>}
                  path={route.path}
                  key={route.path}
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
                  key={route.path}
              />
            )}
              <Route path='*' element={isAuth ? <Navigate to='/posts' replace/> : <Navigate to='/login' replace/>} />
          </Routes>
          }
    </BrowserRouter>
  )
}
