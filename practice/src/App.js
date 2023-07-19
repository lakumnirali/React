import React from 'react';

import Mainrouter from './component/Mainrouter'
import { RouterProvider } from 'react-router-dom';
const App = () => {
  return (
    <>
      < RouterProvider router= {Mainrouter}/>
    </>
  );
};

export default App;
