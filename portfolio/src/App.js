import React, { Component } from 'react';
import { RouterProvider } from "react-router-dom";
import Routerdata from './component/Router.jsx'
class App extends Component {
  render() {
    return (
      <>
      <RouterProvider router={Routerdata}/>
      </>
    );
  }
}

export default App;