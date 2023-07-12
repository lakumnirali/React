import { createBrowserRouter } from "react-router-dom";
import Home from './home.jsx'
import Variety from './variety.jsx'
import Pricing from './pricing.jsx'
import About from './about.jsx'
const router = createBrowserRouter([
    {
        path:"/",
        element:<><Home/></>
    },
    {
        path:"/variety",
        element:<><Variety/></>
    }
    ,
    {
        path:"/pricing",
        element:<><Pricing/></>
    }
    ,
    {
        path:"/aboutus",
        element:<><About/></>
    }
    
])
export default router