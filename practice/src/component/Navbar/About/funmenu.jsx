import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const funmenu = () => {
    return (
        <div className=' col-mg-6 offset-6'>
           <ol>
            <li ><Link to='funintro'>funfum</Link></li>
           </ol>
           <Outlet></Outlet>
        </div>
    );
};

export default funmenu;