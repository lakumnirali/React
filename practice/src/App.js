import React from 'react';
import { RouterProvider } from 'react-router-dom';
import Mainrouter from './component/Router.jsx'
const App = () => {
  return (
    <>
<RouterProvider router = {Mainrouter}/>
    </>
  );
};

export default App;
