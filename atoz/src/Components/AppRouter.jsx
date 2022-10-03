import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { Navbar } from './UI/navbar/Navbar';
import { publicRoutes, privateRoutes } from './../router/Routes';
import Posts from '../pages/Posts';



export const AppRouter = () => {
  const isAuth = true;

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
            </Routes>
          :
          <Routes>
            {publicRoutes.map(route => 
              <Route
                  element={<route.element/>}
                  path={route.path}
              />
            )}
          </Routes>
          }
    </BrowserRouter>
  )
}
