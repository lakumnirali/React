import { createBrowserRouter } from "react-router-dom";
import Navbar from "./navbar.jsx"
import Home from "./Navbar/home.jsx"
const router =createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/><Home/></>
    }
])
export default router       