import { createBrowserRouter } from "react-router-dom";
import Navbar from './Navbar.jsx'
import Module9 from './modulenine.jsx'
import Module10 from './moduleten.jsx'
import Module11 from './moduleeleven.jsx'
import Module12 from './moduletwelve.jsx'
import Classrouter from './moduleten/Classrouter.jsx'
import Funrouter from './moduleten/Funrouter.jsx'
const router =createBrowserRouter([
    {
        path:"/",
        element:<><Navbar/><Module9/></>
    },
    {
        path:"/moduleten",
        element:<><Navbar/><Module10/></>

    },
    {
        path:"/moduleeleven",
        element:<><Navbar/><Module11/></>
    },
    {
        path:"/moduletwelve",
        element:<><Navbar/><Module12/></>,
        children:[
           { path:"classcompo/*",
             element:<><Classrouter/></>
        },
        {
            path:"funcompo/*",
            element:<><Funrouter/></>  
        }
        ]
    }
])
export default router