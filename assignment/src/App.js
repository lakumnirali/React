import React, { Component } from 'react';

import Reactintro from './component/reactintro.jsx'
import Renderlist from './component/renderlist.jsx'
import Incrementdecrement from './component/Incrementdecrement.jsx'
import './app.css'
class App extends Component {
  render() {
    return (
      <>
      <Reactintro/>
      <Renderlist/>
      <Incrementdecrement/>
      </>

    );
  }
}

export default App;
