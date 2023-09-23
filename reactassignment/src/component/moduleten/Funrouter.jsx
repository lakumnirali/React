import React, { Component } from 'react';
import {Routes,Route} from 'react-router-dom'
import Funmenu from './funmenu.jsx'
import Usestateexample from './usestate.jsx'
import UseEffectexample from './useEffect.jsx'
import UseContextexample from './useContext.jsx'
import UseReducerexample from './useReducer.jsx'
import UseCallbackexample from './useCallback.jsx'
import UseMemoexample from './useMemo.jsx'
class Funrouter extends Component {
    render() {
        return (
            <Routes>
            <Route path="/" element={<Funmenu/>}/>
            <Route path='/usestate' element={<Usestateexample/>}/>
            <Route path='/useEffect' element={<UseEffectexample/>}/>
            <Route path='/useContext' element={<UseContextexample/>}/>
            <Route path='/useReducer' element={<UseReducerexample/>}/>
            <Route path='/useCallback' element={<UseCallbackexample/>}/>
            <Route path='/useMemo' element={<UseMemoexample/>}/>
         </Routes>
        );
    }
}
export default Funrouter;