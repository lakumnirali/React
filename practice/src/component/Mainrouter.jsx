import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Navbar/Home.jsx'
import About from './Navbar/About.jsx'
import React, { Suspense } from "react";
import Loader from './Navbar/About/Loader.jsx'
const ClasscompoMenu=React.lazy(()=> import('./Navbar/About/ClassRouter.jsx'))
const Funcompomenu=React.lazy(()=>import('./Navbar/About/FunRouter.jsx'))
const router = createBrowserRouter([

    {
        
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"/about",
        element:<><Navbar/><About/></>,
        children:[
            {
                path:"classcompo/*",
                element:<Suspense fallback={<Loader/>}><ClasscompoMenu/></Suspense>
            },
            {
                path:"funcompo/*",
                element:<Suspense fallback={<Loader/>}><Funcompomenu/></Suspense>
            }
        ]
    }
])
export default router