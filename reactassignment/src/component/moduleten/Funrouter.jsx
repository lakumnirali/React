import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom'
import Funmenu from './funmenu.jsx'
import Usestateexample from './usestate.jsx'
import UseEffectexample from './useEffect.jsx'
class Funrouter extends Component {
    render() {
        return (
            <Routes>
            <Route path="/" element={<Funmenu/>}/>
            <Route path='/usestate' element={<Usestateexample/>}/>
            <Route path='/useEffect' element={<UseEffectexample/>}/>
         </Routes>
        );
    }
}
export default Funrouter;