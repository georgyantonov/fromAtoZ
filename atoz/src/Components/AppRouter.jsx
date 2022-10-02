import React from 'react'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import { Navbar } from './UI/navbar/Navbar';
import About from './../pages/About';
import Posts from './../pages/Posts';
import { NotFound } from './../pages/NotFound';
import { PostIdPage } from './../pages/PostIdPage';
import { routes } from './../router/Routes';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            {routes.map(route => 
                <Route
                    element={<route.element/>}
                    path={route.path}
                />
            )}
        </Routes>
    </BrowserRouter>
  )
}
