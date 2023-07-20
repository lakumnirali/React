import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassMenu from './ClassMenu.jsx';
import ClassIntro from './ClassIntro.jsx'
class ClassRouter extends Component {
    render() {
        return (
           <Routes>
            <Route path='/' element={<ClassMenu/>}>
                <Route path="/classintro" element={<ClassIntro/>}/>
            </Route>
           </Routes>
        );
    }
}

export default ClassRouter;