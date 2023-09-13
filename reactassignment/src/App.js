import React from 'react';
import'./App.css'
import Mainrouter from './component/mainroot.jsx'
import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
    <>
      <RouterProvider router={Mainrouter}/>
    </>
  );
};

export default App;