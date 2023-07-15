import React from 'react';
import Mainrouter from './component/Mainrouter.jsx'
import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
    <>
      <RouterProvider router={Mainrouter}/>
      {/* <><Mainrouter/></> */}
    </>
  );
};

export default App;
