import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Funmenu from './funmenu.jsx'
import Funintro from './funintro.jsx'
class FunRouter extends Component {
    render() {
        return (
           <Routes>
            <Route  path='/' element={<Funmenu/>}/>

            <Route path='/funintro' element={<Funintro/>}/>
           </Routes>
        );
    }
}

export default FunRouter;