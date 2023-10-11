import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Funmenu = () => {
    return (
        <div className=' col-mg-6 offset-6'>
           <ol>
            <h4>Basic Hooks</h4>
            <li><Link to="usestate">useState</Link></li>
            <li><Link to="useEffect">useEffect</Link></li>
            <li><Link to="useContext">useContext</Link></li>
            <h4>Additional Hooks</h4>
            <li><Link to="useReducer">useReducer</Link></li>
            <li><Link to="useCallback">useCallback</Link></li>
            <li><Link to="useMemo">useMemo</Link></li>
            <li><Link to="useuseref">useRef</Link></li>
            <li><Link to="useimperativeHandle">useimperativeHandle</Link></li>
            <li><Link to="useLayoutEffect">useLayoutEffect</Link></li>
            <li><Link to="useDebugValue">useDebugValue</Link></li>
            <li><Link to="useDeferredValue">useDeferredValue</Link></li>
            <li><Link to="useId">useId</Link></li>
            

           </ol>
           <Outlet></Outlet>
        </div>
    );
};

export default Funmenu;