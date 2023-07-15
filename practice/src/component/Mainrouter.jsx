import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../component/Navbar.jsx'
import Home from '../component/Navbar/Home.jsx'
import Features from '../component/Navbar/Features.jsx'
import Pricing from '../component/Navbar/Pricing.jsx'
import About from '../component/Navbar/About.jsx'
import Dropdown from '../component/Navbar/Dropdown.jsx'
const router = createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"/features",
        element:<><Navbar/><Features/></>
    },
    {
        path:"/pricing",
        element:<><Navbar/><Pricing/></>
    },
    {
        path:"/about",
        element:<><Navbar/><About/></>
    },
    {
        path:"/Dropdown",
        element:<><Navbar/><Dropdown/></>,
        
    }
])
export default router;



// import React from 'react';

// const Mainrouter = () => {
//     return (
//         <>

            // <><Navbar/></>
//         </>
//     );
// };

// export default Mainrouter;