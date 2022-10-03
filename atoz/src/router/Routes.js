import About from "../pages/About";
import { Login } from "../pages/Login";
import { NotFound } from "../pages/NotFound";
import Posts from "../pages/Posts";
import { PostIdPage } from './../pages/PostIdPage';

export const privateRoutes = [
    {path: '/about', element: About},
    {path: '/posts', element: Posts},
    {path: '/posts/:id', element: PostIdPage},
    {path: '*', element: NotFound},
    {path: '/', element: Posts},
    {path:'/login', element: Posts},
    {path:'/sign-in', element: Posts}
]

export const publicRoutes = [
    {path:'/login', element: Login},
    {path:'/posts', element: Login},
    {path:'/about', element: Login},
    {path:'/posts/:id', element: Login}
]