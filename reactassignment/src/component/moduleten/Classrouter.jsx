import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom'
import Classmenu from './classmenu.jsx'
import Lifecycleinclass from './lifecycleinclass.jsx'
import Lifecycleloderexample from './lifecycleloderexample.jsx'
class Classrouter extends Component {
    render() {
        return (
            <Routes>
               <Route path='/' element={<Classmenu/>}/> 
               <Route path="/lifecycleinclass" element={<Lifecycleinclass />} />
               <Route path="/lifecycleloderexample" element={<Lifecycleloderexample />} />

            </Routes>
        );
    }
}
export default Classrouter;