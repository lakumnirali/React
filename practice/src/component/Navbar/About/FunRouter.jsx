import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Funmenu from './funmenu.jsx'
import Funintro from './funintro.jsx'
import Stateinfun from './stateinfun.jsx'
import Propsinfun from './propsinfun.jsx'
import Useeffectinfunctionalcompo from './useeffectinfunctionalcompo.jsx'
import Styledinfunctinalcompo from './styledinfunctinalcompo.jsx'
import Usecallbaclfunctionalcompo from './usecallbaclfunctionalcompo.jsx'
import Honneycombtask from './honneycombtask.jsx'
class FunRouter extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<Funmenu />} />
                <Route path='/funintro' element={<Funintro />} />
                <Route path='/stateinfun' element={<Stateinfun />} />
                <Route path='/propsinfun' element={<Propsinfun />} />
                <Route path='/useeffectinfunctionalcompo' element={<Useeffectinfunctionalcompo />} />
                <Route path='/styledinfunctinalcompo' element={<Styledinfunctinalcompo />} />
                <Route path='/usecallbaclfunctionalcompo' element={<Usecallbaclfunctionalcompo />} />
                <Route path='/honneycombtask' element={<Honneycombtask />} />
                <Route />
            </Routes>
        );
    }
}

export default FunRouter;