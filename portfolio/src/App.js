import React, { Component } from 'react';
import { RouterProvider } from "react-router-dom";
import routerdta from './router.jsx'
class App extends Component {
  render() {
    return (
      <>
      <RouterProvider router={routerdata}/>
      </>
    );
  }
}

export default App;