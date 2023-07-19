import { createBrowserRouter } from "react-router-dom";
import Navbar from './navbar'
import Home from './home.jsx'
import Variety from './variety.jsx'
import Pricing from './pricing.jsx'
import About from './about.jsx'
const router = createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"/variety",
        element:<><Navbar/><Variety/></>
    }
    ,
    {
        path:"/pricing",
        element:<><Navbar/><Pricing/></>
    }
    ,
    {
        path:"/aboutus",
        element:<><Navbar/><About/></>
    }
    
])
export default router