import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const funmenu = () => {
    return (
        <div>
           <ol>
            <li><Link to='funintro'>funfum</Link></li>
           </ol>
           <Outlet></Outlet>
        </div>
    );
};

export default funmenu;