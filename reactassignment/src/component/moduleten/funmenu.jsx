import React from 'react';
import { Outlet,Link } from 'react-router-dom';

const Funmenu = () => {
    return (
        <div className=' col-mg-6 offset-6'>
           <ol>
            <li><h4>Basic Hooks</h4></li>
            <li><Link to="usestate">useState</Link></li>
            <li><Link to="useEffect">useEffect</Link></li>
           </ol>
           <Outlet></Outlet>
        </div>
    );
};

export default Funmenu;