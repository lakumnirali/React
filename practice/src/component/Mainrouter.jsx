import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Navbar/Home.jsx'
import About from './Navbar/About.jsx'
const router = createBrowserRouter([

    {
        path:"/",
        element:<><Navbar/><Home/></>
    },
    {
        path:"/About",
        element:<><Navbar/><About/></>
    }
])
export default router