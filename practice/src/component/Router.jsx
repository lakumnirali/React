import { createBrowserRouter } from 'react-router-dom';
import React from 'react';
import Home from './Navbar/Home.jsx'
import Link from './Navbar/Link.jsx'
import Navbar from './Navbar.jsx'

const Router=createBrowserRouter([

{
    path:'/',
    element:<><Navbar/><Home/></>
},
{
    path:'/link',
    element:<><Navbar/><Link/></>
},
// {
//     path:'/home'
//     element:<><Navbar/><Link/></>
// }

])

export default Router;