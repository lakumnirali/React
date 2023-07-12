import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './componet/navbar/navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider } from "react-router-dom";
import Routerdata from './componet/navbar/router.jsx' 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Navbar/>
  <RouterProvider router={Routerdata}/>
  </>
);
