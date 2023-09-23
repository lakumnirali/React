import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Funmenu from './funmenu'
const Funrouter = () => {
    return (
        <Routes>
           <Route path='/' element={Funmenu}/>
        </Routes>
    );
};

export default Funrouter;